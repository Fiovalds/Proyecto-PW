import "../../css/REE/RegistroEspecialista.css"
import Opcion_REE from "../REE/Opcion_REE"
import React from "react"
import { Link } from "react-router-dom"

const Main_REE = () =>{
    const [nombreMedico, setNombreMedico] = React.useState("")
    const [apellidoPatMedico, setApellidoPatMedico] = React.useState("")
    const [apellidoMatMedico, setApellidoMatMedico] = React.useState("")
    const [numMedico, setnumMedico] = React.useState("")
    const [emailMedico, setEmailMedico] = React.useState("")
    const [userNameMedico, setUserNameMedico] = React.useState("")
    const [contraseniaMedico, setContraseniaMedico] = React.useState("")
    const [confircontraseniaMedico, setConfirContraseniaMedico] = React.useState("")
    const [selecEspecialidad, setselecEspecialidad] = React.useState("")

    const data = [
        {
            id:"1",
            Especialidad: "Medicina familiar",
        },
        {
            id:"2",
            Especialidad: "Medicina interna",
        },
        {
            id:"3",
            Especialidad: "Pediatria",
        },
        {
            id:"4",
            Especialidad: "Obstetricia",
        },
        {
            id:"5",
            Especialidad: "Cirugia",
        }
    ]

    const onNombreMedicoChange = (evt) => {
        setNombreMedico(evt.target.value)
    }
    const onApellidoPatMedicoChange = (evt) => {
        setApellidoPatMedico(evt.target.value)
    }
    const onApellidoMatMedicoChange = (evt) => {
        setApellidoMatMedico(evt.target.value)
    }
    const onNumMedicoChange = (evt) => {
        setnumMedico(evt.target.value)
    }
    const onEmailMedicoChange = (evt) => {
        setEmailMedico(evt.target.value)
    }
    const onUserNameMedicoChange = (evt) => {
        setUserNameMedico(evt.target.value)
    }
    const onContraseniaChange = (evt) => {
        setContraseniaMedico(evt.target.value)
    }
    const onConfirContraseniaChange = (evt) => {
        setConfirContraseniaMedico(evt.target.value)
    }
    const onCambioOpcionChange = (evt) => {
        setselecEspecialidad(evt.target.value);
        
    }

    const registrarMedicoOnClick = () => {
        const datosMedico = {
            nombre : nombreMedico,
            apellidoPat : apellidoPatMedico,
            apellidoMat : apellidoMatMedico,
            Especialidad : selecEspecialidad ,
            numeroMedico : numMedico,
            Email : emailMedico,
            UserName : userNameMedico,
            contrasenia : contraseniaMedico,
            confircontrasenia : confircontraseniaMedico 
        }
        console.log("guardado especialista", datosMedico)
    }

    const opciones = data.map(item => {return(
        <Opcion_REE 
            key = {item.id}
            item = {item}
        />
    )})

    return(
        <div className="container aislarcontenido borde mt-5 mb-3 color_letra">
        <h1 className="text-center pt-3" >
            Registro Medico
        </h1>
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="input-group mt-5 mb-3">
                    <span className="input-group-text color_letra">Nombre :</span>
                    <input type={"text"} className="form-control" value={nombreMedico} onChange={ onNombreMedicoChange} />
                </div>
            </div>
        </div>
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="input-group mb-3">
                    <span className="input-group-text color_letra">Apellido P. :</span>
                    <input type={"text"} className="form-control" value={apellidoPatMedico} onChange={ onApellidoPatMedicoChange}/>
                </div>
            </div>
        </div>
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="input-group mb-3">
                    <span className="input-group-text color_letra">Apellido M. :</span>
                    <input type={"text"} className="form-control" value={apellidoMatMedico} onChange={ onApellidoMatMedicoChange}/>
                </div>
            </div>
        </div>
        <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="input-group mb-3">
                        <label className="input-group-text color_letra" > Especialidad :</label>
                        <select onChange={onCambioOpcionChange} className="form-select " aria-label="Default select example">
                            <option>Seleccione su especialidad</option>
                            {opciones}
                        </select>
                        </div>
                    </div>
                </div>
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="input-group mb-3">
                    <span className="input-group-text color_letra">Numero medico :</span>
                    <input type={"text"} className="form-control" value={numMedico} onChange={ onNumMedicoChange}/>
                </div>
            </div>
        </div>
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="input-group mb-3">
                    <span className="input-group-text color_letra">Email :</span>
                    <input type={"text"} className="form-control" value={emailMedico} onChange={ onEmailMedicoChange}/>
                </div>
            </div>
        </div>
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="input-group mb-3">
                    <span className="input-group-text color_letra">Nombre de usuario :</span>
                    <input type={"text"} className="form-control" value={userNameMedico} onChange={ onUserNameMedicoChange}/>
                </div>
            </div>
        </div>
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="input-group mb-3">
                    <span className="input-group-text color_letra">Contraseña :</span>
                    <input type={"password"} className="form-control"value={contraseniaMedico} onChange={ onContraseniaChange}/>
                </div>
            </div>
        </div>
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="input-group mb-3">
                    <span className="input-group-text color_letra">Confirmar contraseña :</span>
                    <input type={"password"} className="form-control"value={confircontraseniaMedico} onChange={ onConfirContraseniaChange}/>
                </div>
            </div>
        </div>
        <div className="row align-items-center justify-content-center pt-5 pb-2" >
            <div className="d-grid gap-2 col-sm-2 mb-3 ">
                <Link className="btn btn-success" to={"/"} onClick={ registrarMedicoOnClick} role="button">Registrar</Link>
            </div>
            <div className="d-grid gap-2 col-sm-2 mb-3">
                <Link className="btn btn-danger "  to={"/"} role="button">Cancelar</Link>
            </div>
        </div>
    </div>
    )
}

export default Main_REE