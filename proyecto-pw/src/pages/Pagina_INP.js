import BodyL_INP from "../components/INP/BodyL_INP"
import BodyR_INP from "../components/INP/BodyR_INP"
import Nav_INP from "../components/INP/Nav_INP"

const Pagina_INP = ()  =>{
    return(
        <body>
          <Nav_INP/>
            <div className="container mt-5 mb-5 color_letra">
                <div className="row justify-content-evenly "> 
                    <BodyL_INP/>
                    <BodyR_INP/>
                </div>
            </div>
        </body>
    )
}

export default Pagina_INP