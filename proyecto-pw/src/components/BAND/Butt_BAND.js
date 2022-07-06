import '../../css/BAND/bandeja.css'

const Butt_BAND = () => {
    return (
        <section>
            <div class="container"> 
                <div class="d-flex row justify-content-between">
                    <div class="col"><a href="/mensaje_publico/crear_mensaje_publico.html"><button id="button_id"  type="button" class="btn btn-btn-primary btn-lg color-buttons">Crear Mensaje</button></a></div>
                    <div class="col d-flex flex-row-reverse"><a href="/InicioPaciente/InicioPaciente.html"><button id="button_id"  type="button" class="btn btn-primary btn-lg color-buttons">Regresar</button></a> </div>
                </div>
            </div>
        </section>
    )
}
export default Butt_BAND