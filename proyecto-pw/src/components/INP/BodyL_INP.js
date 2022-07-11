import "../../css/INP/InicioPaciente.css"
import imagenPerfil from '../../media/INP/1430453.png'
import RadioEspecialidad_INP from "./RadioEspecialidad_INP"

const BodyL_INP = () =>{

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

    const radioespecialidades = data.map(item => {return(
        <RadioEspecialidad_INP 
            key = {item.id}
            item = {item}
        />
    )})

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
                            <h5 className="sm-3"><a href="/HistorialCitas/HistorialCitas.html"> Historial de citas: </a> </h5>
                            <div>Filtrar por:</div>    
                <div className="fw-bold mt-2">Especialidad:</div>        
                <div className="mb-5">
                    <div className="form-check ">
                        <input className="form-check-input" type="radio" name="radioEspecialidades" id="check1" />
                        <label  className="form-check-label">
                            Todos
                        </label>
                    </div>
                    {radioespecialidades}
                </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default BodyL_INP