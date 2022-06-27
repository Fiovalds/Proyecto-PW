import HistMed_IPM from "../components/IPM/HistMed_IPM"
import InfPac_IPM from "../components/IPM/InfPac_IPM"
import Nav_IPM from "../components/IPM/Nav_IPM"

const Pagina_IPM = ()  =>{
    return(
        <body>
            <Nav_IPM/>
            <main>
                <InfPac_IPM/>
                <HistMed_IPM/>
            </main>
        </body>
    )
}

export default Pagina_IPM