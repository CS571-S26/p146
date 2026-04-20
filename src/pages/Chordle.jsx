import { useEffect, useState, useContext } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from '../firebase';
import { Card } from "react-bootstrap";

import DayContext from "../contexts/DayContext";
import DifficultyContext from "../contexts/DifficultyContext";
import GuessContext from "../contexts/GuessContext";

import Note from "./gamemodes/note";
import Crazy from "./gamemodes/crazy";
import Triad from "./gamemodes/Triad";

const modeMap = {
    note: Note,
    triad: Triad,
    crazy: Crazy
};

export default function Chordle(props) {
    const [date] = useContext(DayContext);
    const [difficulty] = useContext(DifficultyContext);
    const [data, setData] = useState([]);
    const [correctGuess, setGuessState] = useState(false);

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

    useEffect(() => {
        setGuessState(false);
    }, [date, difficulty]);

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
            <GuessContext.Provider value={[correctGuess, setGuessState]}>
                {data.length > 0 ? <ModeComponent {...daily} /> : <p>loading</p>}
            </GuessContext.Provider>
        </>
    }

}