import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import CuadroFiltrar from "../components/CuadroFiltrar.component"
import './css/BuscarMedico.css'
import CuadroMedicos from "../components/CuadroMedicos.component"
import NavbarBM from "../components/NavbarBM.component"

const BuscarMedico = _ => {
    const ListaEspecialidades = ["Especialidad 1","Especialidad 2","Especialidad 3","Especialidad 4","Especialidad 5"]
    //PASA LOS DATOS DE ESTA PAGINA A LA DE PUNTUAR MEDICO A TRAVES DE PARAMETROS DE URL
    return <>
        <body className="container-fluid body">
            <NavbarBM/>
            <div className="row">
                <CuadroFiltrar especialidades = {ListaEspecialidades}/>
                <CuadroMedicos/>
            </div>
        </body>
    </>
}
export default BuscarMedico