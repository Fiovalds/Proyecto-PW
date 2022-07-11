import React from "react"
import "../../css/LOG/Login.css"

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
        console.log("guardado datos", datosAcorroborar)
    }

    return(
        <div className="container_login aislarcontenido borde mt-10 mb-5 color_letra">
            <ul className="nav justify-content-end">    
                <li className="nav-item">
                <a className="nav-link fs-5" href="/RegistroPaciente/RegistroPaciente.html">Registro Paciente</a>
                </li>
                <li className="nav-item">
                <a className="nav-link fs-5" href="/RegistroEspecialista/RegistroEspecialista.html">Registro Medico</a>
                </li>
            </ul>
            <div className="row justify-content-center align-items-center pt-5" >
                <div className="col-sm-6   ">
                    <label for="Input_correo" className="form-label fs-3">Correo electrónico</label>
                    <input type="email" className="form-control form-control-lg" value={correo} placeholder="name@example.com" onChange={ onCorreoChange }/>              
                </div>
            </div>
            <div className="row align-items-center justify-content-center pt-5">
                <div className="col-sm-6">
                    <label for="inputPassword" className="form-label fs-3">Contraseña</label>
                    <input type="password" className="form-control form-control-lg" value={contrasenia} onChange={ onContraseniaChange }/>            
                </div>
            </div>
            <div className="row align-items-center justify-content-center pt-2" >
                <div className="col-sm-6">
                <a className="fs-5" href="/RecuperarContraseña/RecuperarContraseña.html">¿Olvido su contraseña?</a>
                </div>
            </div>
            <div className="row pt-5 pb-5">
                <div className="d-grid gap-2 col-sm-2 mx-auto">
                    <a className="btn btna btn-success me-md-2 fs-3" /*</div>href="/InicioPaciente/InicioPaciente.html"*/ onClick={corroborarCorreo} role="button">Ingresar</a>
                </div>
            </div>

        </div>
    )
}

export default Main_LOG