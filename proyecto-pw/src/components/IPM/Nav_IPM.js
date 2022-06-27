import '../../css/IPM/info_pac_med.css'
import '../../css/IPM/main.css'

const Nav_IPM = () =>{
    return(
    <header>
        <div className="header_subtitles">
            <a href="/inicioMedico/inicioMedico.html">Médico</a>
            /
            <a href="/cal_citas_med/cal_citas_med.html">Calendario de citas</a>
            / 
            <a href="#">Información del paciente</a>
        </div>
        <h2 className="header_titles">INFORMACIÓN DEL PACIENTE</h2>
    </header>
    )
}

export default Nav_IPM