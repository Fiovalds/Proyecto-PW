import '../../css/MPRIV/mensaje2.css'

const Nav_MPRIV = () =>{
    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-light" id="nav-color">
                <div>
                    <div>
                    <a className="nave ms-4" href="/InicioPaciente/InicioPaciente.html" id="letra">
                        Paciente /
                    </a>
                    <a className="nave" href="#" id="letra">
                    Preguntas Privados
                </a>
                </div>
                <div className="ms-4">
                    <span className="navbar-brand h1" id="letra3">Crear Mensaje Privado</span>
                </div>
                </div>
            </nav>
        </div>
    )
}

export default Nav_MPRIV