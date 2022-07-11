import "../../CSS/EditarPerfil.css"


const Nav_EP = () => {
    return(
        <div className="card">
        <div className = "encabezadoPerfil">
            <h4>
                <div>
                    <a href="/InicioPaciente/InicioPaciente.html">Principal</a>
                    /
                    <a href="/EditarPerfil/Perfil.html">EditarPerfil</a>
                </div>
            </h4>
            <h1 id="LetraHeader">EDITAR PERFIL</h1>
        </div>
    </div>

    )
}

export default Nav_EP