import React from "react"

const Opcion_REE = (props) => {
    return(
        <option value={props.item.Especialidad}>{props.item.Especialidad}</option>
    )
}

export default Opcion_REE