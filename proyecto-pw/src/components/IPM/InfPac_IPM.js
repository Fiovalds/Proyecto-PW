import '../../css/IPM/info_pac_med.css'
import '../../css/IPM/main.css'

const InfPac_IPM = () =>{
    return(
        <section>
                <div className="info_pac_med">
                <div className="input-group input-group-sm mb-3 ig">
                    <span className="input-group-text color-buttons" id="inputGroup-sizing-sm">Nombre</span>
                    <input className="form-control" type="text" placeholder="Taco, Jimenez" aria-label="Disabled input example" disabled/>
                </div>
                <div className="input-group input-group-sm mb-3 ig">
                    <span className="input-group-text color-buttons" id="inputGroup-sizing-sm">DNI</span>
                    <input className="form-control" type="text" placeholder="72891968" aria-label="Disabled input example" disabled/>
                </div>
                <div className="input-group input-group-sm mb-3 ig">
                    <span className="input-group-text color-buttons" id="inputGroup-sizing-sm">Correo</span>
                    <input className="form-control" type="text" placeholder="angelotacoj@gmail.com" aria-label="Disabled input example" disabled/>
                </div>
            </div>
            <div className="mt-5">
                <div  className="extra_info_pac_med">
                    <span>Notas extra de la atención: </span>
                    <div>
                        <div className="form-floating">
                            <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                            <label for="floatingTextarea"></label>
                        </div>
                    </div>
                </div>
                <div  className="extra_info_pac_med">
                    <span>Diagnostico: </span>
                    <div>
                        <div className="form-floating">
                            <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                            <label for="floatingTextarea"></label>
                        </div>
                    </div>
                </div>
                <div  className="extra_info_pac_med">
                    <span>Receta: </span>
                    <div>
                        <div className="form-floating">
                            <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                            <label for="floatingTextarea"></label>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default InfPac_IPM