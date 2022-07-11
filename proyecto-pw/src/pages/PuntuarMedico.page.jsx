import NavbarPM from "../components/PM/NavbarPM.component"
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "./css/PuntuarMedico.css"
import BodyPM from "../components/PM/BodyPM.component"
import foto from "../components/img/medico.png"

const PuntuarMedico = () => {
    return <>
        <NavbarPM/>
        <BodyPM medico = {"medico"} foto = {foto}/>
    </>
}

export default PuntuarMedico