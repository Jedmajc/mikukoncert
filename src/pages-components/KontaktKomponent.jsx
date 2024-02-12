import {Button, Col, Form, Row, Stack} from "react-bootstrap";
import {Link} from "react-router-dom";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import {useForm} from "react-hook-form";

function KontaktKomponent(){
    const { register, handleSubmit, watch, formState: {errors} } = useForm({
        defaultValues: {
            imie: "",
            nazwisko: "",
            email: "",
            tresc: "",
        }
    });

    const capitalizeFirstLetter = (value) => {
        return value.charAt(0).toUpperCase() + value.slice(1);
    };
    return (
        <Container className={"main"}>
            <Row>
                <Col>
                    <Stack md={1} gap={5}>
                        <Link to={"https://www.instagram.com/mikuhatsune/"}>
                            <Image className={"icon"} src={"/src/img/instagram.png"}/>
                        </Link>
                        <Link to={"https://www.youtube.com/channel/UCJwGWV914kBlV4dKRn7AEFA"}>
                            <Image className={"icon"} src={"/src/img/youtube.png"}/>
                        </Link>
                        <Link to={"https://twitter.com/cfm_miku_en"}>
                            <Image className={"icon"} src={"/src/img/twitter.png"}/>
                        </Link>
                    </Stack>
                </Col>
                <Col md={8}>
                    <Form onSubmit={handleSubmit((data) => {
                        console.log(data)
                    })}>
                        <Stack>
                            <Form.Group className="mb-3" controlId="imie">
                                <Form.Label>Imie</Form.Label>
                                <Form.Control {...register("imie", {required: 'To pole jest wymagane', minLength:{
                                        value: 3,
                                        message: 'To pole musi miec co najmniej 3 znaki'
                                    },
                                    onChange: (e) => {
                                        e.target.value = capitalizeFirstLetter(e.target.value);
                                    },
                                })} type="input" placeholder="Podaj imie" />
                                <Form.Text className="text-danger">
                                    {errors.imie?.message}
                                </Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="nazwisko">
                                <Form.Label>Nazwisko</Form.Label>
                                <Form.Control {...register("nazwisko", {required: 'To pole jest wymagane', minLength:{
                                        value: 3,
                                        message: 'To pole musi miec co najmniej 3 znaki'
                                    },
                                    onChange: (e) => {
                                        e.target.value = capitalizeFirstLetter(e.target.value);
                                    },
                                })} type="input" placeholder="Podaj nazwisko" />
                                <Form.Text className="text-danger">
                                    {errors.nazwisko?.message}
                                </Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="email">
                                <Form.Label>Email</Form.Label>
                                <Form.Control {...register("email", {required: 'To pole jest wymagane', minLength:{
                                        value: 3,
                                        message: 'To pole musi miec co najmniej 3 znaki'
                                    }})} type="email" placeholder="Podaj email" />
                                <Form.Text className="text-danger">
                                    {errors.email?.message}
                                </Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="tresc">
                                <Form.Label>Tresc</Form.Label>
                                <Form.Control {...register("tresc", {required: 'To pole jest wymagane', minLength:{
                                        value: 3,
                                        message: 'To pole musi miec co najmniej 3 znaki'
                                    }})} type="textarea" placeholder="Podaj tresc" />
                                <Form.Text className="text-danger">
                                    {errors.tresc?.message}
                                </Form.Text>
                            </Form.Group>

                            <Button variant="primary" type="submit">
                                Napisz do nas
                            </Button>
                        </Stack>
                    </Form>
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

export default KontaktKomponent;