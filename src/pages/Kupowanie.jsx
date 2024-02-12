import NavbarMain from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import "./Main.css"
import "./Kupowanie.css"
import KupowanieKomponent from "../pages-components/KupowanieKomponent.jsx";



function Kupowanie() {

    return (
        <>
            <NavbarMain />

            <KupowanieKomponent/>

            <Footer />
        </>
    )
}

export default Kupowanie;