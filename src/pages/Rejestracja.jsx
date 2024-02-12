import NavbarMain from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import "./Main.css"
import "./RejestracjaILogowanie.css"
import RejestracjaKomponent from "../pages-components/RejestracjaKomponent.jsx";

function Rejestracja(){




    return (
        <>
            <NavbarMain />

            <RejestracjaKomponent/>

            <Footer />
        </>
    )
}

export default Rejestracja;