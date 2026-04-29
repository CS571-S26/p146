import { Link } from "react-router-dom";

export default function Chords() {
    return <div className="page-content">
        <h1>Chords</h1>
        <p>
            To learn how chords work, we first have to get a conceptual understanding of what a scale is.
            <h2>Scales</h2>
            <p>
                Scales are merely enumerations of each note back
                until you circle around to that same note on the next octave. Which notes you use are with respect to its key signature. This means that the names of
                key signatures are functions of the your base note. For instance, if we'd like to look at each note in the C scale, we'd first consider what our notes look
                like under the key of C. For the purposes of simplicity, it is recommended that the reader looks up the key signatures of a given note, as opposed to memorizing them.
                It turns out that the key of C has no accidentals, meaning that every note is just left in its pure form (this is also why earlier, we said that C was a special note).
                Thus, the notes in a C scale are as follows: C, D, E, F, G, A, B, C. Each note has its own key signature, and thus its own scale.
            </p>
            <h2>Scale Degrees</h2>
            <p>
                It turns out, that an immediate result we can get from scales are scale degrees. The scale degree is a number that tells you how many notes out from your root (base note)
                you are. These are one-indexed, thus the first scale degree of C--which we will call the first of C--is itself. The second would be D, the fifth would be G, and so on.
            </p>
            <h2>
                The Triads
            </h2>
            <p>
                We finally move to identify our first flavor of chord! Since a chord is a group of notes, we say that group of notes is a triad if its simply 3 notes stacked directly on top of each other.
                There are four main flavors of triads: the major, minor, diminished, and augmented triads. Each of those are defined by the structures of the notes used, as well as the root of the chord.
                <br />
                <br />
                We say something is a major chord if it represents the root, the third, and the fifth of some root note. For instance, seeing the notes C, E, and G bundled together would indicate that that
                group of notes is a C major chord (C), and vice versa. Identifying the root can be tricky, since there are several modifications of chords you can use. In general, a good strategy (that doens't always work)
                to identify the root of a chord is to look at the bottom-most note.
                <br />
                <br />
                If we understand what a major chord is, the rest of the chords will be easy. Minor chords are just like major chords. The only difference is that instead of a normal third, minor chords look for flat thirds. Thus,
                a C minor chord (Cm) would include the notes C, E&#x266D;, and G.
                <br />
                <br />
                A diminished chord is a build off of a minor chord. Instead of just a minor third (a flat third), it also looks for a minor fifth. Thus, a C diminished chord (Cdim) would have the notes C, E&#x266D;, and G&#x266D;.
                <br />
                <br />
                Looping back around, an augmented chord is then a play on the major chord again. Instead of the normal fifth, we use a sharp fifth. Thus a C augmented chord (Caug) would have the notes C, E, and G&#x266F;.
                <br />
                <br />
                These are the most common note patterns that you'll encounter in the musical wilderness, thus having names that encode them and their sounds can be really helpful for musicians. It's important to note that a triad doesn't
                just mean it has three notes, but those three notes also have to be directly stacked on one another, and either all be on lines, or all be on spaces! We'll see an example of a chord type that has passes the first condition but
                violates the latter in our next section:
            </p>
            <h2>Suspended Chords</h2>
            <p>
                A suspended chord is an example of a chord with three notes that isn't a triad. Its structure is also comparable to major chords or minor chords. The way they're built is by taking a major or minor chord, and then moving the
                third either into a second or a fourth. Thus, there are actually two flavors of suspended chords, those being sus2 chords and sus4 chords. For instance, a C suspended second chord (Csus2) will have the notes C, D, and G, whereas a C
                suspended fourth chord (Csus4) will have C, F, and G.
                <br />
                <br />
                Those are the structures of the basic chords we will cover here. Note that the triad gamemode only does triads, and so suspended chords will technically live in the crazy gamemode. Additionally, notations for how to answer and format 
                your chords will be located in <Link to="/help">help</Link>. 
            </p>

        </p>
    </div>
}