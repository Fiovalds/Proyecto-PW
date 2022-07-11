import '../../css/RCM/main.css'
import '../../css/RCM/registrar_cita.css'

const ButFoot_RCM = () => {
    return (
        <section>
            <div className="register">
                <button type="button" className="btn btn-success color-buttons" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Reservar cita</button>
                </div>
                <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header justify-content-center flex-column">
                    <h5 className="modal-title" id="staticBackdropLabel">Cita reservada con exito</h5>
                    <h6 className="modal-title" id="staticBackdropLabel">Imprimiendo boleta. . .</h6>
                    </div>
                    <div className="modal-footer flex-row">
                        <a href="/inicioMedico/inicioMedico.html"><button type="button" className="btn btn-success" data-bs-dismiss="modal">Cerrar</button></a> 
                        
                    </div>
                </div>
                </div>
            </div>
        </section>
    )
}
export default ButFoot_RCM