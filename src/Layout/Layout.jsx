import { Nav, Navbar, NavDropdown, Pagination, Form, Button } from "react-bootstrap";
import { Link, Outlet } from "react-router";
import { useState, useEffect } from "react";

import DifficultyContext from "../contexts/DifficultyContext";
import DayContext from "../contexts/DayContext";
import FreeplayContext from "../contexts/FreeplayContext";

export default function Layout(props) {
    const [difficulty, setDifficulty] = useState(() => {
        const stored = sessionStorage.getItem("difficulty");
        return stored ? JSON.parse(stored) : "note"
    });
    const [date, setDate] = useState(() => {
        const stored = sessionStorage.getItem("viewDate");
        return stored ? JSON.parse(stored) : getTodayId();
    });
    const [isFreeplay, setModeStatus] = useState(() => {
        const stored = sessionStorage.getItem("isFreeplay");
        return stored ? JSON.parse(stored) : false;
    })

    useEffect(() => {
        sessionStorage.setItem("viewDate", JSON.stringify(date));
    }, [date])

    useEffect(() => {
        sessionStorage.setItem("difficulty", JSON.stringify(difficulty));
    }, [difficulty])

    useEffect(() => {
        sessionStorage.setItem("isFreeplay", JSON.stringify(isFreeplay));
    }, [isFreeplay])

    function getTodayId() {
        const today = new Date();

        const month = today.getMonth() + 1;
        const day = today.getDate();
        const year = today.getFullYear().toString().slice(-2);

        return `${month}-${day}-${year}`;
    }

    function changeDate(action) {
        setDate(prev => {

            const [month, day, year] = prev.split("-").map(Number);
            const fullYear = 2000 + year;
            const d = new Date(fullYear, month - 1, day);

            if (action === "decrement") {
                d.setDate(d.getDate() - 1);
            } else {
                d.setDate(d.getDate() + 1);
            }

            const newMonth = d.getMonth() + 1;
            const newDay = d.getDate();
            const newYear = d.getFullYear().toString().slice(-2);

            return `${newMonth}-${newDay}-${newYear}`;
        });
    }

    return <div>
        <Navbar className={"border-bottom"}>
            <Nav>
                <Nav.Link as={Link} to="/">Chordle</Nav.Link>
                <Nav.Link as={Link} to="/help">Help</Nav.Link>
                <Nav.Link as={Link} to="/learn">Learn</Nav.Link>
                <NavDropdown title={`difficulty: ${difficulty}`}>
                    <NavDropdown.Item
                        onClick={() => setDifficulty("note")}
                        active={difficulty === "note"}>single note</NavDropdown.Item>

                    <NavDropdown.Item
                        onClick={() => setDifficulty("triad")}
                        active={difficulty === "triad"}>triads</NavDropdown.Item>

                    <NavDropdown.Item
                        onClick={() => setDifficulty("crazy")}
                        active={difficulty === "crazy"}>okay you're crazy</NavDropdown.Item>
                </NavDropdown>
            </Nav>
            <Nav className="ms-auto">
                <div style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 16
                }}>
                    <div style={{ display: "flex", border: "1px solid #ccc", borderRadius: 6 }}>
                        <Button
                            className="dailyButton"
                            variant={!isFreeplay ? "primary" : "light"}
                            onClick={() => setModeStatus(false)}
                        >
                            Daily
                        </Button>

                        <Button
                            className="dailyButton"
                            variant={isFreeplay ? "primary" : "light"}
                            onClick={() => setModeStatus(true)}
                        >
                            Freeplay
                        </Button>
                    </div>
                    <Pagination className="mb-0 mt-0">
                        <Pagination.Prev
                            onClick={() => changeDate("decrement")}
                            disabled={date === "3-23-26"} />
                        <Pagination.Item active disabled >{date}</Pagination.Item>
                        <Pagination.Next onClick={() => changeDate("increment")}
                            disabled={date === getTodayId()} />
                    </Pagination>
                </div>
            </Nav>
        </Navbar>
        <FreeplayContext.Provider value={[isFreeplay]}>
            <DifficultyContext.Provider value={[difficulty, setDifficulty]}>
                <DayContext.Provider value={[date]}>
                    <Outlet />
                </DayContext.Provider>
            </DifficultyContext.Provider>
        </FreeplayContext.Provider>
    </div>
}