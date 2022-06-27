import doctor from '../../media/media_Angelo/813844_people_512x512.png'
import mail from '../../media/media_Angelo/mail.png'
import user from '../../media/media_Angelo/1430453.png'



const InfoDoc_ID = () =>{
    return(
        <section>
            <div className="btn_retroceder">
                <a href="/BuscarMedico/BuscarMedico.html">
                    <button type="button" className="btn btn-secondary color-buttons">Retroceder</button>
                </a>
            </div>
            <div className="card_info">
                <span>
                    <div className="card_info_img">
                    <img src={doctor} alt=""/>
                    </div>
                </span>
                <span>
                    <div>Dr. ROSS, GELLER</div>
                    <div>Especialidad: Neurocirugia</div>
                    <div>Ubicación de consulta: Manuel Olguin 1050</div>
                </span>
                <span>
                <a href="/mensaje_privado/crear_mensaje_privado.html">
                    <div className="card_info_msg">
                    <img src={mail} alt=""/>
                    </div>
                </a>
                </span>
            </div>
            <div className="card_prices">
                <div>
                    <span>Tipo de atención: </span> 
                    <span className="ms-5">Virtual</span>
                </div>
                <div>
                    <span>Precio de consulta:</span> 
                    <span className="ms-5">50</span>
                </div>
            </div>
        </section>
    )

}

export default InfoDoc_ID