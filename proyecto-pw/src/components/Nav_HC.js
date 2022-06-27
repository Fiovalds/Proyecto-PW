import '../css/HC/main.css';
import '../css/HC/historial_citas.css';

const Nav_HC = () => {
    return (
        <header>
        <div className="header_subtitles">
          <a href="/inicioMedico/inicioMedico.html">Médico</a>
          / 
          <a href="/historial_citas/historial_citas.html">Historial de citas</a>
        </div>
        <h2 className="header_titles">HISTORIAL DE CITAS</h2>
    </header>
    )
}
export default Nav_HC