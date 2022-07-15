import React from "react"
import "../../css/LOG/Login.css"
import { Link } from "react-router-dom"

const Main_LOG = () =>{
    const [correo, setCorreo] = React.useState("")
    const [contrasenia, setContrasenia] = React.useState("")

    const onCorreoChange = (evt) => {
        setCorreo(evt.target.value)
    }
    const onContraseniaChange = (evt) => {
        setContrasenia(evt.target.value)
    }

    const corroborarCorreo = () => {
        const datosAcorroborar = {
            correo : correo,
            contra : contrasenia
        }
        if (correo === "" || contrasenia === ""){
            console.log("A")
        }else {
            console.log("b")
            
            
        }
        //(datosAcorroborar.correo == "medico" || datosAcorroborar.contra !== "")
    }

    return(
        <div className="container aislarcontenido borde mt-10 mb-5 color_letra">
            <ul className="nav justify-content-end">    
                <li className="nav-item">
                <Link className="nav-link fs-5" to={"/RegistroPaciente"}>Registro Paciente</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link fs-5" to={"/RegistroEspecialista"}>Registro Medico</Link>
                </li>
            </ul>
            <div className="row justify-content-center align-items-center pt-5" >
                <div className="col-sm-6   ">
                    <label  className="form-label fs-3">Correo electrónico</label>
                    <input type="email" className="form-control form-control-lg" value={correo} placeholder="name@example.com" onChange={ onCorreoChange }/>              
                </div>
            </div>
            <div className="row align-items-center justify-content-center pt-5">
                <div className="col-sm-6">
                    <label  className="form-label fs-3">Contraseña</label>
                    <input type="password" className="form-control form-control-lg" value={contrasenia} onChange={ onContraseniaChange }/>            
                </div>
            </div>
            <div className="row align-items-center justify-content-center pt-2" >
                <div className="col-sm-6">
                <Link className="fs-5" to={"/RecuperarContra"}>¿Olvido su contraseña?</Link>
                </div>
            </div>
            <div className="row pt-5 pb-5">
                <div className="d-grid gap-2 col-sm-2 mx-auto">

                    <Link className="btn btna btn-success me-md-2 fs-3" to={"/InicioPaciente"} onClick={corroborarCorreo} role="button">Ingresar</Link>
                </div>
            </div>

        </div>
    )
}

export default Main_LOG