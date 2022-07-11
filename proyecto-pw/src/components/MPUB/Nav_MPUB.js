import '../../css/MPUB/mensajes.css'

const Nav_MPUB = () =>{
    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-light" id="nav-color">
                <div>
                    <div>
                    <a className="nave ms-4" href="/InicioPaciente/InicioPaciente.html" id="letra">
                        Paciente /
                    </a>
                    <a className="nave" href="#" id="letra">
                        Preguntas /
                    </a>
                    <a className="nave" href="#" id="letra">
                    Preguntas P&uacute;blicas
                </a>
                </div>
                <div className="ms-4">
                    <span className="navbar-brand h1" id="letra3">Crear Mensaje P&uacute;blico</span>
                </div>
                </div>
            </nav>
        </div>
    )
}

export default Nav_MPUB