import '../../css/RCM/main.css'
import '../../css/RCM/registrar_cita.css'
import doctor from '../../media/media_Angelo/813844_people_512x512.png'

const ButCard_RCM = () => {
    return (
        <section>
                <div class="btn_retroceder">
                    <a href="../info_pac_med/info_pac_med.html">
                        <button type="button" class="btn btn-secondary color-buttons">Retroceder</button>
                    </a>
                </div>
                <div class="card_info">
                    <span>
                        <div class="card_info_img">
                        <img src={doctor} alt=""/>
                        </div>
                    </span>
                    <span>
                        <div>Dr. ROSS, GELLER</div>
                        <div>Especialidad: Neurocirugia</div>
                        <div>Ubicación de consulta: Manuel Olguin 1050</div>
                    </span>
                </div>
        </section>
    )
}
export default ButCard_RCM