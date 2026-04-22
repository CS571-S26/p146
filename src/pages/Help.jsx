
export default function Help(props) {
    return <>
        <p>(to be split and formatted later)</p>
        <h3>How to play</h3>
        <p>This game is a play on the popular game <i>Wordle</i>, and mimics its style of daily puzzles. You are given a set of
        daily puzzles of varying difficulties to try to solve. Puzzles are solved by identifying the name of a given note or chord. The 
        naming conventions used are as follows: for notes, we use the note name WITH the octave number sharps or flats are appended after the 
        note letter, using # for sharps and b for flats. For example A4, or C#5. 
        <br/>
        <br/>
        For triads, we adopt the following syntax: root+type, where the root is the root of the chord, the type identifies the type of chord. 
        For instance, C can be appended with nothing, m, aug, or dim to represent major, minor, augmented, or diminished chords. 
        <br/>
        <br/>
        For more complex chords, we use root+type+(modifiers), where modifiers are anything special that might further modify our chord beyond just
        the initial root and type. For instance, Cbsus4(maj7, b9) encodes a C flat suspended 4th with a major 7th and a flat 9th chord. 
        </p>

        <h3>Lore</h3>
        <p>the motivation of this project is first to be able to bring out the intersection of
            two of my interests to create something fun. In addition, I hope that I also can generally
            help increase music literacy in that I hope that the average person would have at least <i>some </i> 
            proficiency in reading and determining note names. the higher difficulties might be for more experienced
            musicians or composers, or just anyone who might want a challenge so that this game offers something
            for everyone!
        </p>
        </>
}