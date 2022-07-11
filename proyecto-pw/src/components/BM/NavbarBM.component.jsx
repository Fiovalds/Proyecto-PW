import { Link } from "react-router-dom"
import paciente from "../img/paciente.png"
const NavbarBM = () => {
    return <>
        <div className="card" id="encabezado">
            <div className="row">
                <div className="col">
                    <div className="fs-5 ms-4">
                        <a className="link" href="/InicioPaciente/InicioPaciente.html">Principal</a>
                        /
                       {/*aqui habia un link*/}
                            <a className="link" href="/Buscaredico/BuscarMedico.html">Buscar medico</a>
                    
                    </div>
                    <div className="mt-2 mb-2 ms-4 fw-bold fs-1" id="divNombreEmpresa">
                        EMPRESA XYZ
                    </div>
                </div>
                <div className="col" id="nombrePaciente">
                    NOMBRE DEL PACIENTE
                </div>
                <img className="imgPaciente" src={paciente} alt="paciente"></img>
            </div>
        </div>
    </>
}

export default NavbarBM