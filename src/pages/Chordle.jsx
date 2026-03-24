import { useEffect, useState } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from '../firebase';


export default function Chordle(props) {
    const [clef, setClef] = useState("treble");
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        getDocs(collection(db, `${clef}Notes`))
            .then(snapshot => {
                setNotes(snapshot.docs.map(doc => 
                    ({
                        id: doc.id,
                        ...doc.data()
                    })
                ))
            })
    }, [clef]);

    console.log(notes);




    return <h1>bruh this ins' thosijdasdsipa</h1>
}