import "../../css/RC/RecuperarContraseña.css"

const Main_RC = () =>{
    return(
        <div className="row">
        <div className="col mx-4"> 
            <div className="container mt-10 mb-3 aislarcontenido borde color_letra">
                <div className="row ">
                    <div className="col-10">
                        <h1 className="border-bottom border-info border-2 md">
                            Recuperar contraseña
                        </h1>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-10 pt-3">
                        <p className="fs-5">
                            Si ha olvidado su contraseña, introduzca el correo electronico con el que se registró para que pueda recuperar su contraseña
                        </p>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-10 pt-3">
                        <div className="input-group mb-3">
                            
                            <input type="text" className="form-control" id="email" placeholder="Correo electronico"/>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-end pt-3 pb-2 ">
                    <div className="d-grid gap-2 col-md-2 mb-2">
                        <a className="btn btna btn-success me-md-2 fs-5" href="/Login/Login.html" role="button">Recuperar</a>
                    </div>
                    <div className="d-grid gap-2 col-md-2 mb-2 ms-3">
                        <a className="btn btna btn-danger me-md-2 fs-5" href="/Login/Login.html" role="button">Cancelar</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Main_RC

