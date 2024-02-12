import NavbarMain from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import "./Main.css"
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import KontoKomponent from "../pages-components/KontoKomponent.jsx";
import Container from "react-bootstrap/Container";


function Konto() {
    const [loginChecked, setLoginChecked] = useState(false)

    useEffect(() => {
        checkLogin();
        setLoginChecked(true)
    }, []);

    const navigate = useNavigate();

    const isAuthenticated = localStorage.getItem("isAuthenticated");

    const checkLogin = () => {
        if (!isAuthenticated) {
            navigate("/logowanie");
        }
    }



    return (
        <>
            {loginChecked && (
                <Container>
                    <NavbarMain />
                    <KontoKomponent/>
                    <Footer />
                </Container>
                )}
        </>
    )
}

export default Konto;