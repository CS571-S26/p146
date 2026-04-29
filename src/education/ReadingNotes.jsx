export default function ReadingNotes() {
    return <div className="page-content">
        <h1>Reading Notes</h1>
        <p>
            A note &#x1D15F; is a specific pitch (frequency) that we hear. The lines of sheet music gives a musician where the notes are.
            The higher the note is, the higher up it will be in the 5 lines you see in a typical <i>staff</i> (the 5 lines).
            Since there are several notes (there are infinite pitches!), there is only so much room in our staff to fit these notes.
            Thus, musicians compromise, and fit the most useful ones on our staff. These "most useful" notes will depend on what type
            of music the musician is playing, as well as their instrument. If a musician intends to play higher notes, they might put
            higher notes in their staff, and vice versa. Since most instruments are made to work together, there are two most common
            groups of standard notes people put in their staff, and thus two most common clefs: the treble &#x1D11F; and bass &#x1D122; clefs. For now, all you
            need to know is that the treble &#x1D11E; clef is centered higher than the bass &#x1D122; clef.
            <br />
            <br />
            Using our new model, we move to give our notes names, so that our clefs hold meaning. Note names will be letters,
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
            consider one special case: the treble &#x1D11F; clef. The "center loop" of the treble clef will always be aligned and point to exactly where the note G4 will live.
            You can tell a note is living on that space if a black circle with a stem is centered on that space. Now that we know where G4 lives, we can find out where
            note lives. Starting from our G4, going up to the space above it raises it by a note, and would be an A4. Likewise, we can go down to the space below the G4
            and decrease our note by a pitch down to F4. From the space that A4 would live on, we can increase our note again to live on the next line above G4. There
            live B4. Thus, to read any note, we identify our clef and which note it points to, then slowly go up by a line or a space to increase our note by one, looping
            octaves if needed. Phew! That was a lot
            <br />
            <br />
            *Note: In actual musical settings, the octave number is usually dropped, but for the purposes of this game, we will keep it for good practice!
        </p>
        <h2>
            Chords
        </h2>
        <p>
            Chords are a little bit more complex. They are a group of notes, each of which occupy the same "bar," thus connecting them and forming a chord. Every combination of notes
            has a different name, which is what makes them complex. It is easy to identify WHICH notes occupy a chord by reading the score, but it can be difficult to know the NAME
            of that same group of notes.
            <br />
            <br />
            The types of notes that you will encounter in the triads gamemode of this game are much more focused, and only have 4 big types. Those are the major chord, the minor chord, the
            diminished chord, and the augmented chord. Fundamentally, triads are just chords that are built by stacking notes on top of each other, spaced apart by one line or space. We will cover
            identifying chords in a later section.
        </p>
        <h2>
            Accidentals
        </h2>
        <p>
            Now that you have a basic idea of what notes and chords are, we can cover some modifiers that can affect how we read notes. The two most common modifiers
            are called accidentals. The three most common accidentals are the sharp &#x266F;, the flat &#x266D;, and the natural &#x266E;. These modifiers will be placed to
            the left of a note to signify that they are modifying that note. If you see a sharp &#x266F;, that means the note it is modifying will be <i>raised by a half step</i>.
            What does it mean to increase or decrease a note by a half step? It means that you take the note <i>between</i> that note, and the next one above or below it. For instance,
            If we saw a C&#x266F; of some octave, that means that we'd be looking at the note between C and the note just above it, which would be a D. Crazy, huh?
            <br />
            <br />
            If you understand the concept of what a sharp &#x266F; does, you'll have no problem with a flat &#x266D;! This is because the flat &#x266D; does exactly the opposite of what
            the sharp does, and it denotes the note a half step down! Thus, seeing a B&#x266D; would mean we'd be looking at the note between C, and the note below it, which would be an A.
            In a sense, you can think of sharps &#x266F; and flats &#x266D; as adding or subtracting a half from your original note, respectively.
            <br />
            <br />
            Knowing both the sharp &#x266F; and the flat &#x266D; can introduce a cool property. Consider B&#x266D; again, and which note that represents. Now consider A&#x266F;, and which note
            that represents. You'll notice that they both represent the same note! When two names correspond to the same note, we say they are <i>enharmonic</i>. Note that this adjective doesn't apply
            to chords!
            <br />
            <br />
            Now to understand our last accidental, the natural &#x266E;, we must first introduce another topic: the key signature.
        </p>
        <h2>The Key Signature</h2>
        <p>
            The key signature is a friend of our clef, and sits just to the right of it. It functions similarly too, since it adds another global modifier to how we read our notes, just like our clef.
            They key signature tells us which notes should <i>always</i> be flat &#x266D; or sharp &#x266F;. The key signature will consist of some floating flat &#x266D; or sharp symbols &#x266F;, and whichever note WOULD be in their place
            represents a note that will permanently modified in our score until indicated otherwise (usually by another key signature, this is called a <i>key change</i>). A key signature is a handy shortcut
            to composers looking to write music. Since, if the song they're writing uses a TON of accidentals, they can just use a key signature to encode all of their flats and sharps down beforehand.
            <br />
            <br />
            But, with a key signature, what if a composer wants to tell a player to use the normal version of that note, without a sharp, or without a flat? Is a key signature a permanent contract? Nope! This
            is where our last (common) accidental, the natural &#x266E; comes in. The natural &#x266E;, when put next to a note, will revert any implicitly modified note (e.g., through a key signature) back to
            its default form. For instance, if our key signature tells us that the note A should be flat &#x266D;, then we can attach a natural &#x266E; to that A, and instead of being read as an A&#x266D;, it'll
            just be read as an A!
            <br />
            <br />
            Note that this game doesn't specify key signatures, but they will be important for identifying chords!
        </p>
    </div>
}