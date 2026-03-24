import { useEffect, useState } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from '../firebase';
import { Image, Card } from "react-bootstrap";


export default function Chordle(props) {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        getDocs(collection(db, `dailies`))
            .then(snapshot => {
                setNotes(snapshot.docs.map(doc => 
                    ({
                        id: doc.id,
                        ...doc.data()
                    })
                ))
            })
    }, []);

    console.log(notes);

    return <div style={{textAlign: "center"}}>
        <Image 
        src="/p146/notes/trebleA3.svg" 
        alt="note A3"
        style={{height: 300, width: 300}}/>
    </div>
}