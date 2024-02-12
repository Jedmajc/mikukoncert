import {Button} from "react-bootstrap";
import {Link} from "react-router-dom";


function KupBilet(){
    return (
        <Button size={"lg"} as={Link} to="/kupowanie" variant="outline-primary">KUP BILET</Button>

    )
}

export default KupBilet;