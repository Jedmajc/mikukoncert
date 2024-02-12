import {Button} from "react-bootstrap";
import {Link} from "react-router-dom";


function KupBilet({handleClick}){

    return (
        <Button size={"lg"} as={Link} to="/kupowanie" variant="outline-primary" onClick={handleClick}>KUP BILET</Button>
    )
}

export default KupBilet;