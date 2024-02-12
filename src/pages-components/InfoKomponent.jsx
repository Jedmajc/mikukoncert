import {Col, Row} from "react-bootstrap";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";

function InfoKomponent() {
    return (
        <Container className={"main"}>
            <Row>
                <Col md={9}>
                    <div className={"opis"}>
                        <h1>Czym jest MIKU KONCERT?</h1>
                        <p>MIKU KONCERT  to światowa trasa koncertowa organizowana przez Kryptońskie Media, która obejmuje różnorodne wydarzenia towarzyszące (wystawy, warsztaty, wydarzenia klubowe…), podczas których fani ze wszystkich środowisk mogą się spotykać i dzielić się różnymi aspektami otaczającej kultury Miku
                        </p>
                    </div>
                    <div className={"o-miku"}>
                        <h1>Kim jest Miku?</h1>
                        <p>Hatsune Miku to japońska sensacja muzyczna, 16-letnia niebieskowłosa dziewczyna o wyjątkowym głosie i niesamowitej energii.

                            To, co czyni ją wyjątkową, to fakt, że nie jest ludzką piosenkarką, ale wirtualną osobą, która podczas występów na scenie wykorzystuje głos generowany komputerowo i grafikę 3D. Dzięki repertuarowi w całości dostarczonemu przez indywidualnych twórców jest pierwszym wirtualnym talentem prawdziwie stworzonym przez tłum. Ale bycie wirtualnym nie powstrzymuje jej od wypełniania sal koncertowych ani współpracy z czołowymi artystami, takimi jak Lady Gaga i Pharrell Williams!

                            Popularność na arenie międzynarodowej, z ponad 2,5 milionami obserwujących na Facebooku, rosnący popyt na koncerty za granicą utorował drogę do Miku Expo, światowego tournée, które dotychczas obejmowało ją od Indonezji po Los Angeles, Nowy Jork i Szanghaj, z niezapomnianym przystankiem telewizyjnym o godz. w programie Davida Lettermana.</p>
                    </div>
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

export default InfoKomponent;