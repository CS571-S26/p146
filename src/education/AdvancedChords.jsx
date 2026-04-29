export default function AdvancedChords() {
    return <div className="page-content">
        <h1>Advanced Chords</h1>
        <p>
            Unfortunately, just triads won't suffice, and there are countless combinations of different notes, each forming different chord names. Thus,
            here we discuss some non-triad chords, as well as ways to modify our current concept of chords to fit and account for more note combinations.
        </p>
        <h2>Seven Chords</h2>
        <p>
            So far, our current model of notes only involve three notes. Seven chords introduce another note to build on top of our usual chords with 3 notes: the seventh.
            There are far too many variations of seven chords, and the reader is encouraged to look some of them up, but some of the more common ones will be covered here.
            <br />
            <br />
            We say something is a major 7 chord if it's a major chord, but stacked with a major 7th on top. Thus, a C major 7 chord (Cmaj7) would have the notes C, E, G, and B.
            <br />
            <br />
            Likewise, we say a chord is a minor 7 chord if it's a minor chord ,but stacked with a minor 7th on top. Thus, a C minor 7 chord (Cm7) would have the notes C, E&#x266D;, G, and B&#x266D;.
            <br />
            <br />
            Now things get a little bit more interesting. We say a chord is a dominant 7th chord if it's a major chord, but with a minor 7th. Thus, a C dominant 7th chord (C7) would have the notes C, E, G, and B&#x266D;.
            <br />
            <br />
            The last one we'll cover here has some funky notation, but the concept is similar. We say a chord is a minor-major 7th if it is has a base minor chord, but with a major 7th. Thus, a C
            minor-major 7th chord (Cm(maj7)) would have the notes C, E&#x266D;, G, and B.
        </p>
        <h2>Nine (and Beyond) Chords</h2>
        <p>
            If you understand 7 chords, nine chords will be no problem. A 9 chord is a seven chord, but added with an added major 9th on top. Hold on, I thought our scale degrees only went up to 8? Turns out, we can
            extend our modal to loop back. Thus, the 9th of a chord is just the 2nd of the chord, but moved up an octave! For those familiar with the modulus operator, you can think of the name of a note as that note degree mod 7.
            <br />
            <br />
            The common types of nine chords that will be listed here follow the exact same naming conventions as the seven chords. A Cmaj9 chord is a Cmaj7 chord but with a 9th. A Cm9 is a Cm7 with a 9th. Same with both the C9 chords and Cm(maj9) chords:
            you treat it as a seven chord, and then stack the 9th on top.
            <br />
            <br />
            It turns out, this pattern continues for all the odd numbers above seven, not just nine. Thus, 11 chords, 13 chords, and above all function by the same structure: taking the previous odd numbered chord just below that, and adding the scale degree
            encoded by the actual name. For instance, a C11 chord would have the notes C, E, G, B&#x266D;, D, and F.
        </p>
        <h2>Add</h2>
        <p1>
            Having established the above, what if we want to skip a few notes in our chord? For instance, is there a way to get our C11 chord but without the 7th (B) and 9th (D)? This is where the notation <i>add</i> comes in.
            <br />
            <br />
            By using the add notation, we can use have a base chord, and directly add a scale degree without adding the notes in between that would otherwise be there with the standard notation just discussed above. Thus, for
            our C11 chord but without the 7th (B) and 9th (D), we could write Cadd11 for the notes C, E, G, and F.
        </p1>
        <h2>Additional Modifiers</h2>
        <p>
            Now we have tools to build chords of all sorts notes, each with varying notes used in the actual construction. We introduce some tools that allow us to play around with our chords some more. The way we do this is by appending a parenthesis () with some
            additional modifiers that we'd just like to shift our base chord off by. These usually include added notes (as seen in the Cm(maj7) chord), or modified notes (such as making a note flat or sharp). There are various syntaxes and methods to encode this,
            but for the context of this game, we list the modiifers we'd like to use first by listing the additional added notes in increasing order, and THEN the modifications (also in increasing order).
            <br />
            <br />
            This lets us have chords that have whatever notes we want. For instance, we could use a C13(&#x266D;5) to first incode a C13 chord, and then tweak the fifth to be flat. This would earn us the notes C, E, G&#x266D;, B&#x266D;, D, and A. Of course, this isn't limited to just our complex chords with 4+ notes. We can also use Dsus2(maj7, &#x266F;5)
            to build a Dsus2 chord, but with an added major 7th of D as well as a sharp 5. That would get us the notes D, E, A&#x266F;, and C&#x266F;.
            <br />
            <br />
            Unfortunately, the introduction of these additional modifiers does mean that each set of notes can have multiple names. For instance, even something as simple as Cdim would have the same notes as Cm(&#x266D;5). Even more unfortunate, is that our guessing game only takes one answer. If one answer doesn't work, try some other potential chord names that may map 
            to the same notes! The most common naming conventions described in this page will almost certainly be the the format to the answers. 
        </p>
    </div>
}