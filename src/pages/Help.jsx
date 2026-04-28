import { Link } from "react-router-dom";

export default function Help(props) {
    return <div className="page-layout">
        <div className="page-main page-content">
            <h3>How to Play</h3>
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
            the initial root and type. For instance, Cbsus4(maj7, b9) encodes a C flat suspended 4th with a major 7th and a flat 9th chord.
            <br/>
            <br/>
            If you are new to music, consider checking out <Link to="/learn">Learn</Link>.
            </p>

            <h3>Lore</h3>
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