import { useEffect, useState, useContext } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from '../firebase';

import DayContext from "../contexts/DayContext";
import DifficultyContext from "../contexts/DifficultyContext";

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

    useEffect(() => {
        getDocs(collection(db, `dailies`))
            .then(snapshot => {
                const data = snapshot.docs.map(doc =>
                ({
                    id: doc.id,
                    ...doc.data()
                })
                )
                console.log(data);
                setData(data);
            })
    }, []);

    const daily = data.find((dailies) => dailies.id === date);
    const ModeComponent = modeMap[difficulty] || Note;

    return (data.length > 0) ? <ModeComponent {...daily} /> : <p>loading</p>;

}