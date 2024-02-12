import Container from "react-bootstrap/Container";
import {Button, Col, Row, Stack} from "react-bootstrap";
import Image from "react-bootstrap/Image";
import './Bilet.css'
import {Link} from "react-router-dom";


function Bilet( {img, tytul, data, opis, placeholder} ){

    return (
        <Container className={"bilet-group"}>
            <Row>
                <Col md={3} className={"bilet-container"}>
                    <Image className={"thumbnail"} src={img} fluid/>
                </Col>
                <Col md={6}>
                    <Stack gap={2}>
                        <div><b>{tytul}</b></div>
                        <div>{data}</div>
                        <div>{opis}</div>
                    </Stack>
                </Col>
                <Col className={"d-flex justify-content-center align-items-center"} md={3}>
                    {placeholder}
                </Col>
            </Row>
        </Container>
    )
}

export default Bilet;