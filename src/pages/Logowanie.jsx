import NavbarMain from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import Container from "react-bootstrap/Container";
import {Button, Form, InputGroup, Stack} from "react-bootstrap";
import "./Main.css"
import {useForm} from "react-hook-form";
import "./RejestracjaILogowanie.css"
import {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
function Logowanie({users}){

    const { register, handleSubmit, watch, formState: {errors} } = useForm({
        defaultValues: {
            mail: "",
            haslo: "",
        }
    });

    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const onLogin = (user) => {
        console.log("Zalogowano:", user);

        localStorage.setItem("isAuthenticated", JSON.stringify(true));

        navigate("/konto");
    };

    const validateLogin = (data) => {
        const foundUser = users.find(
            (user) => user.email === data.email && user.password === data.haslo
        );

        if (foundUser) {
            onLogin(foundUser);
            navigate("/konto");
        } else {
            alert("Nieprawidłowy email lub hasło");
        }
    };

    return (
        <>
            <NavbarMain />

            <Container className={"main form"}>
                <Form onSubmit={handleSubmit(validateLogin)}>
                    <Stack align={"center"}>

                    <Form.Group controlId="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control {...register("email",{ required: "Email jest wymagany" })}
                            type="email"
                            placeholder="Podaj email"
                            name="email"
                        />
                        {errors.email && <p>{errors.email.message}</p>}
                    </Form.Group>

                    <Form.Group controlId="haslo">
                        <Form.Label>Haslo</Form.Label>
                        <InputGroup>
                        <Form.Control {...register("haslo",{ required: "Haslo jest wymagane" })}
                            type={showPassword ? "text" : "password"}
                            placeholder="Haslo"
                            name="haslo"
                        />
                        <Button variant="outline-primary" onClick={togglePasswordVisibility}>
                            {showPassword ? 'Schowaj' : 'Pokaz'}
                        </Button>
                        </InputGroup>
                        {errors.password && <p>{errors.password.message}</p>}
                    </Form.Group>
                        <br/>
                    <Button variant="primary" type="submit" style={{ width: "20%", marginLeft: "40%" }}>
                        Zaloguj
                    </Button>
                    </Stack>

                </Form>
                <Button as={Link} to="/rejestracja" size={"sm"} variant="outline-primary">
                    Zaloz konto
                </Button>
            </Container>

            <Footer />
        </>
    )
}

export default Logowanie;