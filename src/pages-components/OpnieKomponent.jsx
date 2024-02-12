import {Col, Row, Stack} from "react-bootstrap";
import opinie from "../data/opinieData.js";
import Opinia from "../components/Opinia.jsx";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";

function OpnieKomponent(){
    return (
        <Container className={"main"}>
            <Row>
                <Col md={9}>
                    <div className={"opinie-uzytkownikow"}>
                        <h3>Opinie naszych uzytkownikow: </h3>
                    </div>
                    <div className={"jakas-opinia"}>
                        <Stack gap={5}>
                            {opinie.map((opinia, index) => (
                                <Opinia key={index} uzytkownik={opinia.uzytkownik} tresc={opinia.tresc} />
                            ))}
                        </Stack>
                    </div>
                </Col>
                <Col className={"img-container"} md={3}>
                    <div >
                        <Image className={"image"} src={"./src/img/image_2.png"} fluid/>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default OpnieKomponent;