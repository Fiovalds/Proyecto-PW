import Main_EP from "../components/EP/Main_EP"
import Nav_EP from "../components/EP/Nav_EP"
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"

const Pagina_EP = () => {
    return(
        <div id="fondo">
            <div className="mt-2">
                 <Nav_EP/>
                 <Main_EP/>
            </div>
        </div>
    )
}

export default Pagina_EP