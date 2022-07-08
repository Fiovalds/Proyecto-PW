import '../../css/BAND/bandeja.css'

const Nav_BAND = () => {
    return (
        <section>
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
                        Bandeja pública
                    </a>
                    </div>
                    <div className="ms-4">
                    <span className="navbar-brand h1" id="letra3">Bandeja pública</span>
                    </div>
                </div>
            </nav>
        </section>
    )
}
export default Nav_BAND