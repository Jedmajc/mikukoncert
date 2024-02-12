import {Carousel, Col, Row, Stack} from "react-bootstrap";
import Opinia from "../components/Opinia.jsx";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import {useEffect, useState} from "react";
import opinie from "/src/data/opinieData.js"
import Bilet from "../components/Bilet.jsx";


function StartKomponent(){
    const [losowaOpinia, setLosowaOpinia] = useState({});

    useEffect(() => {
        const losowyIndeks = Math.floor(Math.random() * opinie.length);
        setLosowaOpinia(opinie[losowyIndeks]);
    }, []);


    return (
        <Container className={"main"}>
            <Row>
                <Col md={9}>
                    <Stack gap={5}>
                        <div className={"krotki-opis"}>
                            <h1><b>MIKU KONCERT</b> to wszystkie koncerty Miku w jednym miejscu</h1>
                        </div>
                        <Carousel controls={false} indicators={false} interval={8000}>
                            <h4>Opinie uzytkownikow:</h4>
                            {opinie.map((opinia, index) => (
                                <Carousel.Item key={index}>
                                    <Opinia
                                        uzytkownik={opinia.uzytkownik}
                                        tresc={opinia.tresc}
                                    />
                                </Carousel.Item>
                            ))}
                        </Carousel>

                        <div className={"bilet-group"}>
                            <h4 style={{marginLeft: '40%'}}>Najblizszy koncert:</h4>
                            <Bilet
                                img={"/src/img/thumbnail_1.png"}
                                tytul={"Nazwa koncertu"}
                                data={"Data koncertu"}
                                opis={"Opis koncertu"}
                                placeholder={"Ilosc biletow: 1"}
                            />
                        </div>
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

export default StartKomponent;