import { Link } from "react-router-dom";

export default function Help(props) {
    return <div className="page-layout">
        <div className="page-main page-content">
            <h1>Help</h1>
            <h2>How to Play</h2>
            <p>This game is a play on the popular game <i>Wordle</i>, and mimics its style of daily puzzles. You are given a set of
            daily puzzles of varying difficulties to try to solve. Puzzles are solved by identifying the name of a given note or chord. The
            naming conventions used are as follows: for notes, we use the note name WITH the octave number. Sharps or flats are then appended after the
            note letter, using # for sharps and b for flats. For example A4, or C#5.
            <br/>
            <br/>
            For triads, we adopt the following syntax: root+type, where the root is the root of the chord, the type identifies the type of chord.
            For instance, C can be appended with nothing, m, aug, or dim to represent major, minor, augmented, or diminished chords, respectively.
            <br/>
            <br/>
            For more complex chords, we use root+type+(modifiers), where modifiers are anything special that might further modify our chord beyond just
            the initial root and type. For instance, Cbsus4(maj7, b9) encodes a C flat suspended 4th with a major 7th and a flat 9th chord. Within our additional modifiers, 
            we order those first by any modifiers that may add notes, and then modifiers that change notes (e.g. accidentals). Within one of those partitions, if there 
            are ever more then just one modifier of that type, those are to be listed in order of their scale degrees. For instance, we'd say C7(#6, b5, #7) for an added sharp 6th, a 
            modified 5th, and a modified 7th.  
            <br/>
            <br/>
            Unfortunately, note names to notes aren't one-to-one, and there is only one answer for each of the chords in the crazy gamemode. The chords are structured in a way
            so that they aren't <i>too</i> ambiguous in their naming. If there ever is one that doesn't strongly favor any particular naming, changes will be made.  
            <br/>
            <br/>
            If you are new to music, consider checking out <Link to="/learn">Learn</Link>.
            </p>

            <h2>Lore</h2>
            <p>The motivation of this project is first to be able to bring out the intersection of
                two of my interests to create something fun. In addition, I hope that I also can
                help boost anyone's music learning journey so that they can get a start by knowing the basic anatomy
                of music. The higher difficulties might be for more experienced
                musicians or composers, or just anyone who might want a challenge so that this game offers something
                for everyone!
            </p>
        </div>
    </div>
}