import React from "react"


const RadioEspecialidad_INP = (props) =>{
    return(
        <div className="form-check ">
            <input className="form-check-input" type="radio" name="radioEspecialidades"/>
            <label  className="form-check-label">
                 {props.item.especialidad}
            </label>
        </div>
    )}

    export default RadioEspecialidad_INP