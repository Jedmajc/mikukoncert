import {Button, Form, InputGroup, Stack} from "react-bootstrap";
import {Link} from "react-router-dom";
import Container from "react-bootstrap/Container";
import {useForm} from "react-hook-form";
import {useState} from "react";

function RejestracjaKomponent() {
    const { register, handleSubmit, watch, formState: {errors} } = useForm({
        defaultValues: {
            mail: "",
            haslo: "",
            nazwisko: "",
            imie: "",
            telefon: "",
        }
    });

    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const capitalizeFirstLetter = (value) => {
        return value.charAt(0).toUpperCase() + value.slice(1);
    };
    return (
        <Container className={"main form"}>
            <Form onSubmit={handleSubmit((data) => {
                console.log(data)
            })}>
                <Stack>
                    <Form.Group className="mb-3" controlId="imie">
                        <Form.Label>Imie</Form.Label>
                        <Form.Control {...register("imie", {
                            required: 'To pole jest wymagane', minLength: {
                                value: 3,
                                message: 'To pole musi miec co najmniej 3 znaki'
                            },
                            onChange: (e) => {
                                e.target.value = capitalizeFirstLetter(e.target.value);
                            },
                        })} type="input" placeholder="Podaj imie"/>
                        <Form.Text className="text-danger">
                            {errors.imie?.message}
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="nazwisko">
                        <Form.Label>Nazwisko</Form.Label>
                        <Form.Control {...register("nazwisko", {
                            required: 'To pole jest wymagane', minLength: {
                                value: 3,
                                message: 'To pole musi miec co najmniej 3 znaki'
                            },
                            onChange: (e) => {
                                e.target.value = capitalizeFirstLetter(e.target.value);
                            },
                        })} type="input" placeholder="Podaj nazwisko"/>
                        <Form.Text className="text-danger">
                            {errors.nazwisko?.message}
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control {...register("email", {
                            required: 'To pole jest wymagane', minLength: {
                                value: 3,
                                message: 'To pole musi miec co najmniej 3 znaki'
                            }
                        })} type="email" placeholder="Podaj email"/>
                        <Form.Text className="text-danger">
                            {errors.email?.message}
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="numer">
                        <Form.Label>Numer telefonu</Form.Label>
                        <Form.Control {...register("numer", {
                            required: 'To pole jest wymagane', pattern: {
                                value: /^[5-9]\d{8}$/i,
                                message: "Nieprawdlowy numer telefonu"
                            }
                        })} type="input" placeholder="Podaj numer telefonu"/>
                        <Form.Text className="text-danger">
                            {errors.numer?.message}
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="haslo">
                        <Form.Label>Haslo</Form.Label>
                        <InputGroup>
                            <Form.Control {...register("haslo", {
                                required: 'To pole jest wymagane',
                                pattern: {
                                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{10,36}$/i,
                                    message: "Haslo musi zawierac od 10 do 36 znakow, oraz musi posiadac conajmniej 1 mala litere, 1 wielka litere i 1 cyfre"
                                }
                            })}
                                          type={showPassword ? 'text' : 'password'}
                                          placeholder="Podaj haslo"/>
                            <Button variant="outline-primary" onClick={togglePasswordVisibility}>
                                {showPassword ? 'Schowaj' : 'Pokaz'}
                            </Button>
                        </InputGroup>
                        <Form.Text className="text-danger">
                            {errors.haslo?.message}
                        </Form.Text>
                    </Form.Group>


                    <Button variant="primary" type="submit" style={{width: "20%", marginLeft: "40%"}}>
                        Zarejestruj sie
                    </Button>
                </Stack>
            </Form>
            <br/>
            <Button as={Link} to="/logowanie" size={"sm"} variant="outline-primary">
                Zaloguj sie
            </Button>
        </Container>
    )
}

export default RejestracjaKomponent;