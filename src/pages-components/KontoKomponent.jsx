import Container from "react-bootstrap/Container";
import '../components/FooterCss.css';
import {Button, Col, Row} from "react-bootstrap";
import Image from "react-bootstrap/Image";
import {useNavigate} from "react-router-dom";
import Bilet from "../components/Bilet.jsx";

function KontoKomponent() {
    const navigate = useNavigate();


    const handleLogout = () => {
        localStorage.removeItem("isAuthenticated");
        navigate("/logowanie");
    };

    return (
        <Container className={"main"} fluid>
            <Row>
                <Col md={9}>
                    <div className={"moje-bilety"}>
                        <h3>Moje bilety:</h3>
                        <Bilet
                            img={"/src/img/thumbnail_1.png"}
                            tytul={"MIKU FANTASY"}
                            data={"15 marca 2024, Tokyo Dome"}
                            opis={"Przygotuj się na podróż do magicznego świata fantazji z niezapomnianym występem Hatsune Miku, pełnym kolorowych wizji i energetycznej muzyki!"}
                            placeholder={"Ilosc biletow: 1"}
                        />
                    </div><br/>
                    <Button variant={"primary"} onClick={handleLogout}>
                        Wyloguj sie
                    </Button>
                </Col>
                <Col className={"img-container"} md={3}>
                    <div >
                        <Image className={"image"} src={"./src/img/image_2.png"} fluid/>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default KontoKomponent;