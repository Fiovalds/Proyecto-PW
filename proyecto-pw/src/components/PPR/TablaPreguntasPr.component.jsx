import paciente from "../img/paciente.png"
const TablaPreguntasPr = (props) => {
    const ArmarListaRespuestas = (pregunta) => {
        const respuestas = pregunta.respuestas
        const ListaRespuestas = []
        respuestas.forEach((respuesta, index) => {
            ListaRespuestas.push(
                <div className="text-start mt-4 mb-4">
                    <label className="mb-4"> Respuesta de doctor {`${index + 1}:`}</label>
                    <div className="text-center">
                        <textarea className="respuesta" disabled placeholder={respuesta} id="comentario" cols="50" rows="5"></textarea>
                    </div>
                </div>
            )
        });
        return ListaRespuestas
    }
    const ArmarListaPreguntas = (preguntas) => {
        const ListaPreguntas = []
        preguntas.forEach((pregunta) => {
            ListaPreguntas.push(
                <div className="pregunta">
                    <div className="row ms-4 me-4 mt-2">
                        <div className="col nombres">Nombre Apellido</div>
                        <div className="col text-center">
                            <img className="imgPaciente" src={paciente} alt="Foto Perfil del Paciente"></img>
                        </div>
                        <div className="col-8">
                            <div>Pregunta:</div>
                            <nav> {pregunta.pregunta}</nav>
                        </div>
                    </div>
                    <div className="row">
                        <div className="text-end">
                            <button type="button" className="btn btn-info btnResponder mb-3  ms-3 me-3" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                Responder
                            </button>

                            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog modal-dialog-centered">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="exampleModalLabel">Responder Pregunta:</h5>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body">

                                            <div className="text-center mt-4 mb-4">
                                                <textarea placeholder="Añadir respuesta" id="comentario" cols="50" rows="5"></textarea>
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                                                <button type="button" className="btn btn-info btnResponder" data-bs-dismiss="modal">Guardar respuesta </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })
        return ListaPreguntas
    }
    return <>
        {ArmarListaPreguntas(props.preguntas)}
    </>
}
export default TablaPreguntasPr