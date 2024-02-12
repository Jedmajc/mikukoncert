import NavbarMain from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import "./Main.css"
import InfoKomponent from "../pages-components/InfoKomponent.jsx";

function Info() {
    return (
        <>
            <NavbarMain />

            <InfoKomponent/>

            <Footer />
        </>
    )
}

export default Info;