const chords = {
  crazy: [
    { name: "chordAb7#9", description: "Ab, C, Eb, Gb, Bb" },
    { name: "chordAm(maj7)", description: "A, C, E, G#" },
    { name: "chordAm(#5)", description: "A, C, E#" },
    { name: "chordAm9", description: "A, C, E, G, B" },
    { name: "chordB7(b9)", description: "B, D#, F#, A, C" },
    { name: "chordBb7sus2", description: "Bb, C, F, Ab" },
    { name: "chordBmin9", description: "B, D, F#, A, C#" },
    { name: "chordBsus2", description: "B, C#, F#" },
    { name: "chordC7", description: "C, E, G, Bb" },
    { name: "chordC13(b5)", description: "C, E, Gb, Bb, D, A" },
    { name: "chordCadd9", description: "C, E, G, D" },
    { name: "chordCm(maj7,b9,#5)", description: "C, Eb, G#, B, Db" },
    { name: "chordD7sus2", description: "D, E, A, C" },
    { name: "chordDm7", description: "D, F, A, C" },
    { name: "chordE7sus4(#5)", description: "E, A, C, D#" },
    { name: "chordEb7", description: "Eb, G, Bb, Db" },
    { name: "chordEbmin(maj7,9,#5)", description: "Eb, Gb, B, D, F" },
    { name: "chordEsus4(add9)", description: "E, A, B, F#" },
    { name: "chordF9", description: "F, A, C, Eb, G" },
    { name: "chordF#mb5", description: "F#, A, C" },
    { name: "chordG7(#5,#9)", description: "G, B, D#, F, A#" },
    { name: "chordG7#5", description: "G, B, D#, F" },
    { name: "chordGsus4", description: "G, C, D" }
  ],

  triad: [
    { name: "chordA", description: "A, C#, E" },
    { name: "chordAbsus", description: "Ab, Db, Eb" },
    { name: "chordAbm", description: "Ab, Cb, Eb" },
    { name: "chordAm", description: "A, C, E" },
    { name: "chordB", description: "B, D#, F#" },
    { name: "chordBbsus", description: "Bb, Eb, F" },
    { name: "chordBbmin", description: "Bb, Db, F" },
    { name: "chordC", description: "C, E, G" },
    { name: "chordCaug", description: "C, E, G#" },
    { name: "chordCm", description: "C, Eb, G" },
    { name: "chordDaug", description: "D, F#, A#" },
    { name: "chordDb", description: "Db, F, Ab" },
    { name: "chordDm", description: "D, F, A" },
    { name: "chordE", description: "E, G#, B" },
    { name: "chordEaug", description: "E, G#, C" },
    { name: "chordEb", description: "Eb, G, Bb" },
    { name: "chordEbmin", description: "Eb, Gb, Bb" },
    { name: "chordF", description: "F, A, C" },
    { name: "chordFdim", description: "F, Ab, B" },
    { name: "chordF#min", description: "F#, A, C#" },
    { name: "chordG", description: "G, B, D" },
    { name: "chordGaug", description: "G, B, D#" },
    { name: "chordGbm", description: "Gb, Bbb, Db" },
    { name: "chordGm", description: "G, Bb, D" },
    { name: "chordG#dim", description: "G#, B, D" }
  ],

  note: [
    { name: "trebleA3", description: "This treble space note is on the second staff space from the bottom" },
    { name: "trebleA4", description: "This treble space note is on the second staff space from the bottom" },
    { name: "trebleA5", description: "This treble space note is on the first ledger space above the staff" },
    { name: "trebleA#3", description: "This treble sharp space note is on the second staff space from the bottom" },
    { name: "trebleB3", description: "This treble line note is on the third staff line from the bottom" },
    { name: "trebleB4", description: "This treble line note is on the third staff line from the bottom" },
    { name: "trebleB5", description: "This treble line note is on the first ledger line above the staff" },
    { name: "trebleBb3", description: "This treble flat line note is on the third staff line from the bottom" },
    { name: "trebleC4", description: "This treble line note is on the first ledger line below the staff" },
    { name: "trebleC5", description: "This treble space note is on the third staff space from the bottom" },
    { name: "trebleC6", description: "This treble space note is on the second ledger space above the staff" },
    { name: "trebleC#4", description: "This treble sharp line note is on the first ledger line below the staff" },
    { name: "trebleC#5", description: "This treble sharp space note is on the third staff space from the bottom" },
    { name: "trebleD4", description: "This treble space note is below the first staff line" },
    { name: "trebleD5", description: "This treble line note is on the fourth staff line from the bottom" },
    { name: "trebleD#5", description: "This treble sharp line note is on the fourth staff line from the bottom" },
    { name: "trebleE4", description: "This treble line note is on the first staff line from the bottom" },
    { name: "trebleE5", description: "This treble space note is on the fourth staff space from the bottom" },
    { name: "trebleEb4", description: "This treble flat line note is on the first staff line from the bottom" },
    { name: "trebleF4", description: "This treble space note is on the first staff space from the bottom" },
    { name: "trebleF5", description: "This treble line note is on the fifth staff line from the bottom" },
    { name: "trebleF#5", description: "This treble sharp line note is on the fifth staff line from the bottom" },
    { name: "trebleG4", description: "This treble line note is on the second staff line from the bottom" },
    { name: "trebleG5", description: "This treble space note is above the fifth staff line" },
    { name: "trebleGb4", description: "This treble flat line note is on the second staff line from the bottom" },
    { name: "trebleG#4", description: "This treble sharp line note is on the second staff line from the bottom" }
  ]
};

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
        date: { stringValue: today },
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