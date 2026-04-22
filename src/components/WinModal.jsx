import { Modal, Button } from "react-bootstrap";
import confetti from "canvas-confetti";
import { useContext, useEffect } from "react";

import DifficultyContext from "../contexts/DifficultyContext";

export default function WinModal({ show, onHide, item }) { // no this has nothing to do with windows

    const [difficulty, setDifficulty] = useContext(DifficultyContext);
    const toRecommend = ["note", "triad", "crazy"].filter(item => item !== difficulty);

    useEffect(() => {
        if (show) {
            confetti({
                particleCount: 120,
                spread: 70,
                origin: { y: 0.6 },
                zIndex: 9999
            });
        }
    }, []);

    const difficultyMap = {
        note: "Try the daily note!",
        triad: "Try the daily triad!",
        crazy: "Feeling bold?"
    }

    return <div>
        <Modal show={show} onHide={onHide}>
            <Modal.Header>
                <Modal.Title className="w-100 text-center">omg you winned</Modal.Title>
            </Modal.Header>
            <Button
                type="button"
                className="btn-close"
                onClick={onHide}
                style={{ position: "absolute", right: "1rem", top: "1rem" }}
            />
            <Modal.Body className="w-100 text-center">The {difficulty === "note" ? "note" : "chord"} was {item}!!!</Modal.Body>
            <Modal.Footer>
                <Modal.Title className="w-100 text-center">Try the other modes</Modal.Title>
                <div style={{ display: "flex", justifyContent: "center", width: "100%", gap: 10 }}>
                    {
                        toRecommend.map(difficulty => (
                            <Button
                                className="myButton"
                                key={difficulty}
                                onClick={() => setDifficulty(difficulty)}
                            >
                                {difficultyMap[difficulty]}
                            </Button>
                        ))
                    }
                </div>
            </Modal.Footer>
        </Modal>
    </div>
}