import { Link } from "react-router-dom"

const BodyPM = (props) => {
    return <>
        <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha385-AYmEC3Yw5cVb3ZcuHt0A93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>
        <div class="row cuerpo">
        <div class="col"></div>
        <div class="col-6">
            <div class="row">
                <div class="col"></div>
                <div class="col text-end" id="divImgMedico">
                    <img class="imgMedico" src={props.foto} alt="Foto medico"></img>
                </div>
                <div class="col-5">
                    <div class="fs-2 fw-bold">Nombre médico</div>
                    <div>
                        <span class="fs-4">Especialidad:</span>
                        &nbsp;
                        <span class="fs-5">#######</span>
                    </div>
                    <div class="fs-4">Calificar:</div>
                </div>
                <div class="col"></div>
            </div>
        </div>
        <div class="col"></div>
    </div>
    
    <div class="text-center mt-3">
        <span class="fa fa-star" id="estrella1"></span>
        <span class="fa fa-star" id="estrella2"></span>
        <span class="fa fa-star" id="estrella3"></span>
        <span class="fa fa-star" id="estrella4"></span>
        <span class="fa fa-star" id="estrella5"></span>
    </div>
    <div class="text-center mt-4">
        <textarea placeholder="Añadir comentario (opcional)" id="comentario" cols="50" rows="5"></textarea>
    </div>
    <div class="text-center mt-4">
        <form method="get" action="/BuscarMedico/BuscarMedico.html">
            {<Link to="/iniciopaciente/BuscarMedico">
                <button class="btn btn-outline-info">Aceptar</button>
            </Link>}
        </form>
    </div>
    </>
}
export default BodyPM