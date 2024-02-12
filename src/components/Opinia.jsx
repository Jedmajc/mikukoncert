import Container from "react-bootstrap/Container";
import {Button, Col, Row, Stack} from "react-bootstrap";
import Image from "react-bootstrap/Image";
import './Bilet.css'
import {Link} from "react-router-dom";
import "./Opinia.css"


function Opinia( {uzytkownik, tresc} ){
    return (
        <Container className={"opinia"}>
            <Stack>
                <h5 className={"uzytkownik"}>{uzytkownik}</h5>
                <div>{tresc}</div>
            </Stack>
        </Container>
    )
}

export default Opinia;