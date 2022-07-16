import React from "react"
import { Link } from "react-router-dom"
import "../../css/INP/InicioPaciente.css"
import imagenPerfil from '../../media/INP/1430453.png'
import OpcionesEspecialidad_INP from "./OpcionesEspecialidad_INP"

const BodyL_INP = () =>{

    const [especialidadSeleccionada, setEspecialidadSeleccionada] = React.useState("0")

    const data = [
        {
            id:"1",
            especialidad: "Especialidad 1"
        },
        {
            id:"2",
            especialidad: "Especialidad 2"
        },
        {
            id:"3",
            especialidad: "Especialidad 3"
        },
        {
            id:"4",
            especialidad: "Especialidad 4"
        },
        {
            id:"5",
            especialidad: "Especialidad 5"
        },
    ]

    const opciones_INP = data.map(item => {return(
        <OpcionesEspecialidad_INP 
            key = {item.id}
            item = {item}
        />
    )})

    const onEspecialidadSeleccionadaChange = (evt) =>{
        setEspecialidadSeleccionada(evt.target.value)
    }

    return(
        <div className="col-sm-3  mx-4">
                <div className="container card mt-4 aislarcontenido borde">
                    <div className="row mb-3">
                        <div className="col text-center">
                            <img src={imagenPerfil} alt="..." className="img-fluid p-3 img-circle text-center"/>
                        </div>
                    </div>
                    <div className="row">
                        <h3 className="text-center mb-3">Nombre paciente</h3>
                    </div>
                    <div className="row mx-auto">
                        <div className="col">
                            <h5 className="sm-3"><Link to="/HistorialCitas"> Historial de citas: </Link> </h5>
                            <div>Filtrar por:</div>    
                <div className="fw-bold mt-2">Especialidad:</div>        
                <div className="mb-5">
                    <select value={especialidadSeleccionada} className="form-select"  onChange={onEspecialidadSeleccionadaChange}>
                        
                        <option value={"0"}>Todas</option>
                        {opciones_INP}
                    </select>
                    
                   
                </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default BodyL_INP