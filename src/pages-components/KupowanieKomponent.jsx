import {Button, Col, Form, Row, Stack} from "react-bootstrap";
import Bilet from "../components/Bilet.jsx";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import {useForm} from "react-hook-form";

function KupowanieKomponent(){
    const { register, handleSubmit, watch, formState: {errors} } = useForm({
        defaultValues: {
            ile_biletow: 1,
            rodzaj_biletu: 1
        }
    });
    return (
        <Container className={"kupowanie-main main"}>
            <Row>
                <Col md={4} className={"d-flex justify-content-center align-items-center"}>
                    <Form onSubmit={handleSubmit((data) => {
                        console.log(data)
                    })}>
                        <Stack gap={1}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Wybierz liczbe biletow</Form.Label>
                                <Form.Control {...register("ile_biletow", {required: 'To pole jest wymagane'})} type="number" placeholder="Liczba biletow" />
                                <Form.Text className="text-danger">
                                    {errors.ile_biletow?.message}
                                </Form.Text>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Wybierz rodzaj miejsca</Form.Label>
                                <Form.Select {...register("rodzaj_biletu", {required: 'To pole jest wymagane'})}>
                                    <option value="1">Miejsce siedzace</option>
                                    <option value="2">Miejsce stojace</option>
                                </Form.Select>
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                KUP BILET
                            </Button>
                        </Stack>
                    </Form>
                </Col>
                <Col className={"d-flex justify-content-center align-items-center"} md={4}>
                    <Bilet
                        tytul={"Nazwa koncertu"}
                        data={"Data koncertu"}
                        opis={"Opis koncertu"}
                    />
                </Col>
                <Col className={"d-flex justify-content-center align-items-center"} md={4}>
                    <Image className={"koncert-img"} src={"/src/img/thumbnail_1.png"}></Image>
                </Col>
            </Row>
        </Container>
    )
}

export default KupowanieKomponent;