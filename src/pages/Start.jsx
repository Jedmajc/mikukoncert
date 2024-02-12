import NavbarMain from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import "./Main.css"
import StartKomponent from "../pages-components/StartKomponent.jsx";

function Start() {
    return (
        <>
            <NavbarMain/>

            <StartKomponent/>

            <Footer/>
        </>
    )
}

export default Start;