import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link, Outlet } from "react-router";

export default function Layout(props){
    return <div>
        <Navbar className="border-bottom">
            <Nav>
                <Nav.Link as={Link} to="/">chordle</Nav.Link>
                <Nav.Link as={Link} to="/help">help</Nav.Link>
                <NavDropdown title="difficulty">
                    <NavDropdown.Item>easy</NavDropdown.Item>
                    <NavDropdown.Item>medium</NavDropdown.Item>
                    <NavDropdown.Item>hard</NavDropdown.Item>                    
                </NavDropdown>
            </Nav>
        </Navbar>
        <Outlet/>
    </div>
}