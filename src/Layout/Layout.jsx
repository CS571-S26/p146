import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link, Outlet } from "react-router";

export default function Layout(props){
    return <div>
        <Navbar className={"border-bottom ms-auto"}>
            <Nav>
                <Nav.Link as={Link} to="/">chordle</Nav.Link>
                <Nav.Link as={Link} to="/help">help</Nav.Link>
                <NavDropdown title="difficulty">
                    <NavDropdown.Item>single note</NavDropdown.Item>
                    <NavDropdown.Item>triads</NavDropdown.Item>
                    <NavDropdown.Item>okay you're crazy</NavDropdown.Item>                    
                </NavDropdown>
            </Nav>
        </Navbar>
        <Outlet/>
    </div>
}