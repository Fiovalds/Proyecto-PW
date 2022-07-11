import medico from "../img/medico.png"
import estrella from "../img/estrella.png"
import { Link } from "react-router-dom"
const Medico = (props) => {
    return <>
        <div className="col-4">
            <div className="rectangulosDoctor">
                <div className="divImgMedico text-center">
                    <img className="imgMedico" src={medico} alt="Doctor"></img>
                    <form method="get" action="/PuntuarMedico/PuntuarMedico.html">
                        {/* aqui habia un link*/}
                            <input type="image" src={estrella} className="btn imgEstrella btn-sm"></input>
                      
                    </form>
                </div>
                <div className="text-center">
                    <a href="/info_doc/info_doc.html">{props.medico.nombre}</a>
                </div>
                <div className="divBtnCentrado">
                    <button className="btn btn-info m-1">{props.medico.especialidad}</button>
                </div>
                <div className="divBtnCentrado">
                    <form method="get" action="/registrar_cita_pac/registrar_cita.html">
                        <button className="btn btn-info m-1">Ver horarios</button>
                    </form>
                </div>
            </div>
        </div>
    </>
}
export default Medico