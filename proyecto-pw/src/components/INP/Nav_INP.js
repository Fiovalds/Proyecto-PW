import { Link } from "react-router-dom"
import "../../css/INP/InicioPaciente.css"
import imagenNav from '../../media/INP/1430453.png'

const Nav_INP = () =>{
    return(
        <div>
        <nav className="navbar navbar-expand-lg navbar-light fondocabecera" id="nav-color">
            <div className="container-fluid">
                <div>  
                    <label className="form-label perfil h5">
                        EMPRESA XYZ |
                    </label>    
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle fs-5 color_letra" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Preguntas</a>
                            <ul className="dropdown-menu">
                              <li><Link className="dropdown-item fs-5 color_letra" to={"/BuzonPrivado"} >Buzon privado</Link></li>
                              <li><hr className="dropdown-divider"/></li>
                              <li><Link className="dropdown-item fs-5 color_letra" to={"/BandejaPublica"}>Bandeja publica</Link></li>
                            </ul>
                          </li>
                          <li className="nav-item dropdown">
                              <a className="nav-link dropdown-toggle fs-5 color_letra" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Citas</a>
                              <ul className="dropdown-menu">
                                  <li><Link className="dropdown-item fs-5 color_letra" to={"/MisCitas"}>Mis citas</Link></li>
                                  <li><hr className="dropdown-divider"/></li>
                                  <li><Link className="dropdown-item fs-5 color_letra" to={"/BuscarMedico"}>Agendar citas</Link></li>
                               </ul>
                          </li>
                          <li className="nav-item">
                              <Link className="nav-link fs-5" to={"/EditarPerfil"}>Editar datos</Link>
                            </li>
                    </ul>
                    <label className="form-label me-2 color_letra h5">
                        | NOMBRE PACIENTE
                    </label>
                    <img src={imagenNav} className="img-circle"  alt="..." width="50px;"/>    
                
                </div>
            </div>
        </nav>
    </div>
    )
}

export default Nav_INP