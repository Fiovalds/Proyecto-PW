import Nav_ID from "../components/ID/Nav_ID"
import InfoDoc_ID from "../components/ID/InfoDoc_ID"
import CalDoc_ID from "../components/ID/CalDoc_ID"
import ComDoc_ID from "../components/ID/ComDoc_ID"


const Pagina_ID = () =>{
    return(
        <body>
            <Nav_ID />
            <main>
                <InfoDoc_ID />
                <CalDoc_ID />
                <ComDoc_ID/>
            </main>
        </body>
    )
}
export default Pagina_ID