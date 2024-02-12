import {Col, Row, Stack} from "react-bootstrap";
import bilety from "../data/biletyData.js";
import Bilet from "../components/Bilet.jsx";
import KupBilet from "../components/KupBilet.jsx";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";

function BiletyKomponent() {
    return(
        <Container className={"main"} fluid>
            <Row>
                <Col md={9}>
                    <Stack gap={4}>
                        {bilety.map((bilety, index) => (
                            <Bilet key={index} img={bilety.img} tytul={bilety.tytul} tresc={bilety.tytul} data={bilety.data} opis={bilety.opis} placeholder={1 ? <KupBilet/> : "Ilosc biletow: 1"} />
                        ))}
                    </Stack>
                </Col>
                <Col className={"img-container"} md={3}>
                    <div>
                        <Image className={"image"} src={"./src/img/image_2.png"} fluid/>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default BiletyKomponent;