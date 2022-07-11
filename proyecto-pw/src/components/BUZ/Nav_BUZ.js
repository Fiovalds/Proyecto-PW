import '../../css/BUZ/buzon.css'

const Nav_BUZ = () => {
    return (
        <section>
            <nav className="navbar navbar-expand-lg navbar-light" id="nav-color">
              <div>
                <div>
                  <a className="nave ms-4" href="/InicioPaciente/InicioPaciente.html" id="letra">
                    Paciente /
                  </a>
                <a className="nave" href="#" id="letra">
                  Buzón Privado
              </a>
              </div>
              <div className="ms-4">
                <span className="navbar-brand h1" id="letra3">Buzón Privado</span>
              </div>
            </div>
          </nav>
        </section>
    )
}
export default Nav_BUZ