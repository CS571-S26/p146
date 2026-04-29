import { Outlet, NavLink } from "react-router-dom";
import { Nav } from "react-bootstrap";

export default function EducationLayout() {
    return (
        <div className="page-layout">
            <div className="page-sidebar">
                <Nav className="flex-column">
                    <Nav.Link as={NavLink} to="/learn">
                        Intro
                    </Nav.Link>
                    <Nav.Link as={NavLink} to="/learn/reading-notes">
                        Reading Notes
                    </Nav.Link>
                    <Nav.Link as={NavLink} to="/learn/chords">
                        Chords
                    </Nav.Link>
                    <Nav.Link as={NavLink} to="/learn/advanced-chords">
                        Advanced Chords
                    </Nav.Link>
                </Nav>
            </div>
            <Outlet/>
        </div>
    );
}