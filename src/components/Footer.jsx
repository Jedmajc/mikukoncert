import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import './FooterCss.css';

function Footer() {
    return (
        <Navbar fixed={"bottom"} className="bg-body-tertiary footer">
            <Container>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        Copyright: MIKU KONCERT
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Footer;