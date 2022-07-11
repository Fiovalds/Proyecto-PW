import { Link } from "react-router-dom"

const NavbarPM = () => {
    return <>
        <div className="card mb-5"  id="encabezado">
            <div className="card-header">
                <div className="fs-5 ms-2">
                    <a className="link" href="/InicioPaciente/InicioPaciente.html">Principal</a>
                    /
                    {<Link to="/iniciopaciente/BuscarMedico">
                        <a className="link" href="/HistorialCitas/HistorialCitas.html">Buscar Médico</a>
                    </Link>}
                    /
                    <a className="link" href="/HistorialCitas/HistorialCitas.html">Puntuar Médico</a>
                </div>
                <div className="mt-2 mb-2 ms-2 fw-bold fs-1">
                    EMPRESA XYZ
                </div>
            </div>
        </div>
    </>
}

export default NavbarPM