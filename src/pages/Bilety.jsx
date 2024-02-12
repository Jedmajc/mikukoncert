import NavbarMain from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import "./Main.css"
import BiletyKomponent from "../pages-components/BiletyKomponent.jsx";
function Bilety() {

    return (
        <>
            <NavbarMain />

            <BiletyKomponent/>

            <Footer />
        </>
    )
}

export default Bilety;