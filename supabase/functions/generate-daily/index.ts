import chords from "../../../shared/chords.js";

const random = (arr: any[]) =>
  arr[Math.floor(Math.random() * arr.length)];

function toFirestore(obj: any) {
  return {
    mapValue: {
      fields: {
        name: { stringValue: obj.name },
        description: { stringValue: obj.description },
      },
    },
  };
}

async function getAccessToken(serviceAccount: any): Promise<string> {
  const header = {
    alg: "RS256",
    typ: "JWT",
  };

  const now = Math.floor(Date.now() / 1000);
  const payload = {
    iss: serviceAccount.client_email,
    scope: "https://www.googleapis.com/auth/cloud-platform",
    aud: "https://oauth2.googleapis.com/token",
    exp: now + 3600,
    iat: now,
  };

  // Encode header and payload
  const headerEncoded = btoa(JSON.stringify(header))
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=/g, "");

  const payloadEncoded = btoa(JSON.stringify(payload))
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=/g, "");

  const message = `${headerEncoded}.${payloadEncoded}`;

  // Convert PEM private key to DER format
  const privateKeyPem = serviceAccount.private_key
    .replace(/\\n/g, "\n");

  // Remove PEM headers and decode base64
  const privateKeyDer = privateKeyPem
    .replace("-----BEGIN PRIVATE KEY-----", "")
    .replace("-----END PRIVATE KEY-----", "")
    .replace(/\n/g, "");

  const binaryString = atob(privateKeyDer);
  const bytes = new Uint8Array(binaryString.length);
  for (let i = 0; i < binaryString.length; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }

  const key = await crypto.subtle.importKey(
    "pkcs8",
    bytes.buffer,
    { name: "RSASSA-PKCS1-v1_5", hash: "SHA-256" },
    false,
    ["sign"]
  );

  // Sign the message
  const signature = await crypto.subtle.sign(
    "RSASSA-PKCS1-v1_5",
    key,
    new TextEncoder().encode(message)
  );

  // Encode signature
  const signatureEncoded = btoa(String.fromCharCode(...new Uint8Array(signature)))
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=/g, "");

  const jwt = `${message}.${signatureEncoded}`;

  // Exchange JWT for access token
  const tokenResponse = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
      assertion: jwt,
    }).toString(),
  });

  const tokenData = await tokenResponse.json();
  return tokenData.access_token;
}

Deno.serve(async () => {
  try {
    const now = new Date();
    const today = `${now.getMonth() + 1}-${now.getDate()}-${now.getFullYear().toString().slice(-2)}`;

    const daily = {
      crazy: random(chords.crazy),
      triad: random(chords.triad),
      note: random(chords.note),
    };

    const projectId = Deno.env.get("FIREBASE_PROJECT_ID");
    const serviceAccountKey = JSON.parse(
      Deno.env.get("FIREBASE_SERVICE_ACCOUNT_KEY") || "{}"
    );

    if (!projectId) {
      return new Response(JSON.stringify({ error: "FIREBASE_PROJECT_ID not set" }), { status: 500 });
    }

    if (!serviceAccountKey.private_key) {
      return new Response(JSON.stringify({ error: "FIREBASE_SERVICE_ACCOUNT_KEY not properly configured" }), { status: 500 });
    }

    const url =
      `https://firestore.googleapis.com/v1/projects/${projectId}` +
      `/databases/(default)/documents/dailies/${today}`;

    const body = {
      fields: {
        crazy: toFirestore(daily.crazy),
        triad: toFirestore(daily.triad),
        note: toFirestore(daily.note),
      },
    };

    const accessToken = await getAccessToken(serviceAccountKey);

    const res = await fetch(url, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${accessToken}`,
      },
      body: JSON.stringify(body),
    });

    console.log("Firestore response status:", res.status);
    const resText = await res.text();
    console.log("Firestore response:", resText);

    if (!res.ok) {
      return new Response(JSON.stringify({ error: resText }), { status: 500 });
    }

    return new Response(JSON.stringify({
      success: true,
      daily,
      firestoreStatus: res.status
    }), { status: 200 });
  } catch (error) {
    console.error("Error in generate-daily function:", error);
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
});