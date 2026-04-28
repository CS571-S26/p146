export default function Learn() {
    return <div className="page-layout">
        <div className="page-content">
            <h1>Learn</h1>
            <p>This page is designed to help you learn how sheet music notation works,
                as well as how to read it! To learn just enough to be able to play the note difficulty, consider reading the "reading notes" section.
                Since chords are more complex, the starting section on chords will only cover what chords are; identifying them isn't as trivial as just an individual note.
                To learn how to identify chords, or even further how to identify what this game considers "crazy difficulty" chords, feel free to dive deeper down
                this guide for more information!
                {/* <br />
                <br />
                If you are a mathematician or are familiar with the mathematical style of definitions and are looking to learn music,
                consider the mathematician's mode. (something to implement) */}
            </p>
            <h4>Reading notes</h4>
            <p>
                A note is a specific pitch. The lines of sheet music gives a musician where the notes are.
                The higher the note is, the higher up it will be in the 5 lines you see in a typical <i>staff</i> (the 5 lines).
                Since there are several notes (there are infinite pitches!), there is only so much room in our staff to fit these notes.
                Thus, musicians compromise, and fit the most useful ones on our staff. These "most useful" notes will depend on what type
                of music the musician is playing, as well as their instrument. If a musician intends to play higher notes, they might put
                higher notes in their staff, and vice versa. Since most instruments are made to work together, there are two most common
                groups of standard notes people put in their staff. Which group we're using is determined by the <i>clef</i> the sheet music
                is written in: imagine a spectrum of notes side by side.
                <br />
                <br />
                Using this new basic model, we can almost figure out how to read notes. First, we must give our notes names. Note names will be letters,
                and there are 7 of them, being A, B, C, D, E, F, and G. The lowest is A, and the highest is G. Now you might be confused, because didn't we
                just establish that there are infinite pitches, and thus infinite notes, so how are there only 7? Your concern is valid, and completely correct!
                The lowest note is actually "A0", where A is the note name "A," and "0" denotes the <i>octave</i> number this note is on. The octave is
                the number of "loops" of our 7 notes we've done. Going up notes, we might start with A0, and then our next note would simply increase the letter
                and be B0. The next note is tricky, since the next note is actually <i>C1</i>. This is because despite A being the first note, C actually determines
                the start of octaves. Thus, to list out our notes starting from A0, we'd have A0, B0, C1, D1, E1, F1, G1, A1, B1, C2,.... Why? This is because
                the note C has some special properties that we'll see later. For now, you should accept this naming model.
                <br />
                <br />
                With our current model of the staff, the clef, and note names, we can finally strategize how to read a note! First, we look for our clef in our score.
                Our clef will be located on the left of our staff lines. We look to our clef to tell us where the center note is. Since there are two clefs, we'll just
                consider one special case: the treble clef. The "center loop" of the treble clef will always be aligned and point to exactly where the note G4 will live.
                You can tell a note is living on that space if a black circle with a stem is centered on that space. Now that we know where G4 lives, we can find out where
                note lives. Starting from our G4, going up to the space above it raises it by a note, and would be an A4. Likewise, we can go down to the space below the G4
                and decrease our note by a pitch down to F4. From the space that A4 would live on, we can increase our note again to live on the next line above G4. There
                live B4. Thus, to read any note, we identify our clef and which note it points to, then slowly go up by a line or a space to increase our note by one, looping
                octaves if needed. Phew! That was a lot
                <br />
                <br />
            </p>
            <h4>
                Chords
            </h4>
            <p>
                Chords are a little bit more complex. They are a group of notes, each of which occupy the same "bar," thus connecting them and forming a chord. Every combination of notes
                has a different name, which is what makes them complex. It is easy to identify WHICH notes occupy a chord by reading the score, but it can be difficult to know the NAME
                of that same group of notes.
            </p>
            <h4>
                Score modifiers
            </h4>
            <ul>
                <li>The clef</li>
                <li>The key signature</li>
                <li>the time signature</li>
            </ul>
            <p>

            </p>
        </div>

    </div>

}