import "../../CSS/MisCitas.css"

const Nav_CP = () => {
    return(
        <div className="card">
            <div className="card-header" id="encabezadoCita">
                <h4>
                    <div>
                        <a href="/InicioPaciente/InicioPaciente.html">Principal</a>
                        /
                        <a href="/CitasPaciente/misCitas.html">Mis citas</a>
                    </div>
                </h4>
                <h1 id="LetraCita">MIS CITAS</h1>
            </div>
        </div>
    )
}

export default Nav_CP