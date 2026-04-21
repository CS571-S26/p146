import { useEffect, useState, useContext } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from '../firebase';
import { Card } from "react-bootstrap";

import DayContext from "../contexts/DayContext";
import DifficultyContext from "../contexts/DifficultyContext";
import FreeplayContext from "../contexts/FreeplayContext";

import Note from "./gamemodes/note";
import Crazy from "./gamemodes/crazy";
import Triad from "./gamemodes/Triad";

import { allChords } from "../../shared/chords.js";
import { generateChords } from "../../shared/fillerChords.js";

// dilutes guess pool
const guessPool = [
    ...new Set([
        ...allChords.map(c => c.name.replace(/^(chord|treble)/, "")),
        ...generateChords().map(n => n.replace(/^(chord|treble)/, "")),
    ])
];

const modeMap = {
    note: Note,
    triad: Triad,
    crazy: Crazy
};

export default function Chordle(props) {
    const [date] = useContext(DayContext);
    const [difficulty] = useContext(DifficultyContext);
    const [isFreeplay] = useContext(FreeplayContext);
    const [data, setData] = useState([]);

    const [guessFormatted, setGuessFormatted] = useState("initial");

    useEffect(() => {
        getDocs(collection(db, `dailies`))
            .then(snapshot => {
                const data = snapshot.docs.map(doc =>
                ({
                    id: doc.id,
                    ...doc.data()
                })
                )
                setData(data);
            })
    }, []);

    function displayAnswer() {
        return daily[difficulty].name.replace(/^(chord|treble)/, "");
    }

    useEffect(() => {
        setGuessFormatted("initial");
    }, [date, difficulty, isFreeplay]);

    const daily = data.find((dailies) => dailies.id === date);
    const ModeComponent = modeMap[difficulty] || Note;

    if (daily === undefined) {
        return <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "80vh"
        }}>
            <Card style={{ width: 150, aspectRatio: 1 }}>
                <Card.Body>
                    <Card.Text>No information loaded for today</Card.Text>
                </Card.Body>
            </Card>
        </div>
    } else {
        return <>
            {data.length > 0 ? <ModeComponent
                {...daily}
                guessPool={guessPool}
                guessFormated={guessFormatted}
                setGuessFormatted={setGuessFormatted}
            /> : <p>loading</p>}
            <div style={{
                display: "flex",
                justifyContent: "center"
            }}>
                {
                    (guessFormatted === "invalid") && (
                        <p style={{
                            color: "red"
                        }}>{"Invalid guess format!\n"}</p>
                    )
                }
            </div>
        </>
    }
}