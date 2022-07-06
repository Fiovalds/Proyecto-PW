import '../../css/BUZ/buzon.css'

const Butt_BUZ = () => {
    return (
        <section>
            <div className="container"> 
                <div className="d-flex row justify-content-between">
                    <div className="col"><a href="/mensaje_privado/crear_mensaje_privado.html"><button id="button_id"  type="button" className="btn btn-btn-primary btn-lg color-buttons">Crear Mensaje</button></a></div>
                    <div className="col d-flex flex-row-reverse"><a href="/InicioPaciente/InicioPaciente.html"><button id="button_id"  type="button" className="btn btn-primary btn-lg color-buttons">Regresar</button></a> </div>
                </div>
            </div>
        </section>
    )
}
export default Butt_BUZ