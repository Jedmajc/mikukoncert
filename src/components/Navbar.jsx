import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Button, Stack} from "react-bootstrap";
import './NavbarCss.css';
import { Link } from 'react-router-dom';

function NavbarMain() {

    return (
        <Navbar fixed={"top"} className="bg-body-tertiary navbar-custom">
            <Container>
                <Container className={"logo-container"}>
                    <Navbar.Brand as={Link} to="/">
                        <img className={"logo"} src={"/src/img/logo.jpg"} alt={"logo"}/>
                    </Navbar.Brand>
                </Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Stack direction={"horizontal"} gap={3}>
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link as={Link} to="/info">Info</Nav.Link>
                            <Nav.Link as={Link} to="/kontakt">Kontakt</Nav.Link>
                            <Nav.Link as={Link} to="/opinie">Opinie</Nav.Link>
                            <Nav.Link as={Link} to="/bilety">Bilety</Nav.Link>
                            <div className="vr" />
                            <Button as={Link} to="/konto">Konto</Button>
                        </Stack>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavbarMain;