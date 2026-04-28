import { Image, Form, Button } from "react-bootstrap"
import { useRef, useState, useContext, useEffect } from "react";

import DayContext from "../../../contexts/DayContext";
import DifficultyContext from "../../../contexts/DifficultyContext";
import FreeplayContext from "../../../contexts/FreeplayContext";

import WinModal from "../../../components/WinModal";
import { isDailyCompleted, markDailyCompleted, loadDailyState, saveDailyState } from "../../../utils/dailyStorage";

export default function TriadDaily(props) {
    const chord = props.chord;
    const isValidGuess = props.isValidGuess;
    const setGuessFormatted = props.setGuessFormatted;

    const [date] = useContext(DayContext);
    const [difficulty] = useContext(DifficultyContext);
    const [isFreeplay] = useContext(FreeplayContext);

    const initialState = loadDailyState(date, difficulty);
    const guessRefs = useRef([]);
    const [guesses, setGuesses] = useState(() => initialState?.guesses ?? Array(6).fill(""));
    const [currentGuessIndex, setCurrentGuessIndex] = useState(() => initialState?.currentGuessIndex ?? 0);
    const [correctGuess, setGuessState] = useState("initial");
    const [modalStatus, setModalStatus] = useState(() => initialState?.completed ?? (!isFreeplay && isDailyCompleted(date, difficulty)));
    const [completed, setCompleted] = useState(() => initialState?.completed ?? (!isFreeplay && isDailyCompleted(date, difficulty)));
    const [outOfGuesses, setOutOfGuesses] = useState(() => initialState?.outOfGuesses ?? false);

    useEffect(() => {
        if (modalStatus || completed || outOfGuesses) return;
        guessRefs.current[currentGuessIndex]?.focus();
    }, [currentGuessIndex, modalStatus, completed, outOfGuesses]);

    useEffect(() => {
        saveDailyState(date, difficulty, {
            guesses,
            currentGuessIndex,
            completed,
            outOfGuesses
        });
    }, [guesses, currentGuessIndex, completed, outOfGuesses, isFreeplay]);

    function handleGuess(e) {
        e.preventDefault();
        if (completed || outOfGuesses) return;

        const guess = guesses[currentGuessIndex].trim();

        if (!isValidGuess(guess)) {
            setGuessFormatted("invalid");
            setGuessState("initial");
            return;
        }
        setGuessFormatted("valid");

        if (guess === chord.name.replace(/^(chord|treble)/, "")) {
            setGuessState("true");
            setModalStatus(true);
            markDailyCompleted(date, difficulty);
            setCompleted(true);
            return;
        }

        setGuessState("false");

        if (currentGuessIndex === 5) {
            setOutOfGuesses(true);
            return;
        }

        setCurrentGuessIndex(currentGuessIndex + 1);
    }

    useEffect(() => {
        const saved = loadDailyState(date, difficulty);
        const isCompleted = isDailyCompleted(date, difficulty);
        setGuessState("initial");
        setGuessFormatted("initial");

        if (saved) {
            setGuesses(saved.guesses ?? Array(6).fill(""));
            setCurrentGuessIndex(saved.currentGuessIndex ?? 0);
            setOutOfGuesses(saved.outOfGuesses ?? false);
            setCompleted(saved.completed ?? isCompleted);
            setModalStatus(saved.completed ?? isCompleted);
        } else {
            setGuesses(Array(6).fill(""));
            setCurrentGuessIndex(0);
            setOutOfGuesses(false);
            setCompleted(isCompleted);
            setModalStatus(isCompleted);
        }
    }, [date, difficulty, isFreeplay]);


    return <div style={{ textAlign: "center" }}>
        <h1>daily or something sidk</h1>
        <Image
            src={`/p146/triads/${chord.name.replaceAll("#", "sharp")}.svg`}
            alt={chord.description}
            style={{ height: 400, width: 400 }} />

        {outOfGuesses && (
            <div style={{ marginBottom: 20 }}>
                <p style={{ color: "red", fontSize: "1.2em" }}>
                    The chord was: <strong>{chord.name.replace(/^(chord|treble)/, "")}</strong>
                </p>
            </div>
        )}

        <Form onSubmit={handleGuess} style={{ maxWidth: 400, margin: "0 auto" }}>
            <Form.Label htmlFor={`answer-${currentGuessIndex}`}>enter a guess</Form.Label>
            <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
                {guesses.map((guess, index) => (
                    <Form.Control
                        key={index}
                        id={`answer-${index}`}
                        placeholder={index === currentGuessIndex ? "e.g. C, Cm, Caug, Cdim etc." : ""}
                        value={guess}
                        onChange={(e) => {
                            const next = [...guesses];
                            next[index] = e.target.value;
                            setGuesses(next);
                        }}
                        ref={(el) => (guessRefs.current[index] = el)}
                        disabled={completed || outOfGuesses || index !== currentGuessIndex}
                        style={{
                            borderRadius: index === 0 ? "8px 8px 0 0" : index === 5 ? "0 0 8px 8px" : 0,
                            borderTop: index === 0 ? undefined : "none"
                        }}
                    />
                ))}
                <Button type="submit" disabled={completed || outOfGuesses}>guess</Button>
            </div>
        </Form>
        {outOfGuesses && <p style={{ color: "red" }}>You used all 6 guesses.</p>}
        {
            (modalStatus) && <WinModal
                show={modalStatus}
                onHide={() => setModalStatus(false)}
                item={chord.name.replace(/^(chord|treble)/, "")}
            />
        }
        {(correctGuess === "true") && <p>you did it!</p>}
        {(correctGuess === "false") && <p>nope!</p>}
    </div>
}