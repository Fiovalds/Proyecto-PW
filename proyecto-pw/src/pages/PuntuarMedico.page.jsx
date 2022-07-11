import NavbarPM from "../components/NavbarPM.component"
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "./css/PuntuarMedico.css"
import BodyPM from "../components/BodyPM.component"
import foto from "../img/medico.png"

const PuntuarMedico = () => {
    return <>
        <NavbarPM/>
        <BodyPM medico = {"medico"} foto = {foto}/>
    </>
}

export default PuntuarMedico