import '../../css/ID/main.css';
import '../../css/ID/info_doc.css';

const Nav_ID = () =>{
    return(
        <header>
        <div className="header_subtitles">
          <a href="/inicioMedico/inicioMedico.html">Principal</a>
          / 
          <a href="/BuscarMedico/BuscarMedico.html">Buscar médico</a>
          / 
          <a href="#">Nombre del médico</a>
        </div>
        <h2 className="header_titles">Información del médico</h2>
    </header>
    )
}
export default Nav_ID