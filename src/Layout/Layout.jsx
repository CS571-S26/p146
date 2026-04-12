import { Nav, Navbar, NavDropdown, Pagination } from "react-bootstrap";
import { Link, Outlet } from "react-router";
import { useState } from "react";
import DifficultyContext from "../contexts/DifficultyContext";
import DayContext from "../contexts/DayContext";

export default function Layout(props) {
    const [difficulty, setDifficulty] = useState("note");
    const [date, setDate] = useState(getTodayId());

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
                <Nav.Link as={Link} to="/">chordle</Nav.Link>
                <Nav.Link as={Link} to="/help">help</Nav.Link>
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
            <Nav className="ms-auto me-2">
                <Pagination className="mb-0 mt-0">
                    <Pagination.Prev
                        onClick={() => changeDate("decrement")}
                        disabled={date === "3-23-26"}/>
                    <Pagination.Item active disabled >{date}</Pagination.Item>
                    <Pagination.Next onClick={() => changeDate("increment")}
                        disabled={date === getTodayId()} />
                </Pagination>
            </Nav>
        </Navbar>
        <DifficultyContext.Provider value={[difficulty]}>
            <DayContext.Provider value={[date]}>
                <Outlet />
            </DayContext.Provider>
        </DifficultyContext.Provider>
    </div>
}