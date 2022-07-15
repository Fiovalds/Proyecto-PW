import "../../css/REP/RegistroPaciente.css"
import React from "react"
import { Link } from "react-router-dom"

const Main_REP = () =>{
    const [nombrePaciente, setNombrePaciente] = React.useState("")
    const [apellidoPatPaciente, setApellidoPatPaciente] = React.useState("")
    const [apellidoMatPaciente, setApellidoMatPaciente] = React.useState("")
    const [DNIPaciente, setDNIPaciente] = React.useState("")
    const [emailPaciente, setEmailPaciente] = React.useState("")
    const [userNamePaciente, setUserNamePaciente] = React.useState("")
    const [contraseniaPaciente, setContraseniaPaciente] = React.useState("")
    const [confircontraseniaPaciente, setConfirContraseniaPaciente] = React.useState("")

    const onNombrePacienteChange = (evt) => {
        setNombrePaciente(evt.target.value)
    }
    const onApellidoPatPacienteChange = (evt) => {
        setApellidoPatPaciente(evt.target.value)
    }
    const onApellidoMatPacienteChange = (evt) => {
        setApellidoMatPaciente(evt.target.value)
    }
    const onDNIPacienteChange = (evt) => {
        setDNIPaciente(evt.target.value)
    }
    const onEmailPacienteChange = (evt) => {
        setEmailPaciente(evt.target.value)
    }
    const onUserNamePacienteChange = (evt) => {
        setUserNamePaciente(evt.target.value)
    }
    const onContraseniaChange = (evt) => {
        setContraseniaPaciente(evt.target.value)
    }
    const onConfirContraseniaChange = (evt) => {
        setConfirContraseniaPaciente(evt.target.value)
    }

    const registrarPacienteOnClick = () => {
        const datosPaciente = {
            nombre : nombrePaciente,
            apellidoPat : apellidoPatPaciente,
            apellidoMat : apellidoMatPaciente,
            DNI : DNIPaciente,
            Email : emailPaciente,
            UserName : userNamePaciente,
            contrasenia : contraseniaPaciente,
            confircontrasenia : confircontraseniaPaciente 
        }
        console.log("guardado paciente", datosPaciente)
    }

    return(
        <div className="container aislarcontenido borde mt-5 mb-3 color_letra">
        <h1 className="text-center pt-3" >
            Registro paciente
        </h1>
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="input-group mt-5 mb-3">
                    <span className="input-group-text color_letra">Nombre :</span>
                    <input type={"text"} className="form-control" value={nombrePaciente} onChange={ onNombrePacienteChange} />
                </div>
            </div>
        </div>
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="input-group mb-3">
                    <span className="input-group-text color_letra">Apellido P. :</span>
                    <input type={"text"} className="form-control" value={apellidoPatPaciente} onChange={ onApellidoPatPacienteChange}/>
                </div>
            </div>
        </div>
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="input-group mb-3">
                    <span className="input-group-text color_letra">Apellido M. :</span>
                    <input type={"text"} className="form-control" value={apellidoMatPaciente} onChange={ onApellidoMatPacienteChange}/>
                </div>
            </div>
        </div>
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="input-group mb-3">
                    <span className="input-group-text color_letra">DNI :</span>
                    <input type={"text"} className="form-control" value={DNIPaciente} onChange={ onDNIPacienteChange}/>
                </div>
            </div>
        </div>
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="input-group mb-3">
                    <span className="input-group-text color_letra">Email :</span>
                    <input type={"text"} className="form-control" value={emailPaciente} onChange={ onEmailPacienteChange}/>
                </div>
            </div>
        </div>
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="input-group mb-3">
                    <span className="input-group-text color_letra">Nombre de usuario :</span>
                    <input type={"text"} className="form-control" value={userNamePaciente} onChange={ onUserNamePacienteChange}/>
                </div>
            </div>
        </div>
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="input-group mb-3">
                    <span className="input-group-text color_letra">Contraseña :</span>
                    <input type={"password"} className="form-control"value={contraseniaPaciente} onChange={ onContraseniaChange}/>
                </div>
            </div>
        </div>
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="input-group mb-3">
                    <span className="input-group-text color_letra">Confirmar contraseña :</span>
                    <input type={"password"} className="form-control"value={confircontraseniaPaciente} onChange={ onConfirContraseniaChange}/>
                </div>
            </div>
        </div>
        <div className="row align-items-center justify-content-center pt-5 pb-2" >
            <div className="d-grid gap-2 col-sm-2 mb-3 ">
                <Link className="btn btn-success" to={"/"} onClick={ registrarPacienteOnClick} role="button">Registrar</Link>
            </div>
            <div className="d-grid gap-2 col-sm-2 mb-3">
                <Link className="btn btn-danger "  to={"/"} role="button">Cancelar</Link>
            </div>
        </div>
    </div>
    )
}

export default Main_REP