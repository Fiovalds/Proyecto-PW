import CardRegistroIzq from "../components/REG/CardRegistroIzq.component";
import NavbarRegistro from "../components/REG/NavbarRegistro.component";
import CardRegistroDer from "../components/REG/CardRegistroDer.component";

const Registro = () => {
  return (
    <div>
      <NavbarRegistro />
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <CardRegistroIzq />
          </div>
          <div className="col-md-6">
            <CardRegistroDer />
          </div>
          <div className="d-grid gap-2 d-md-flex justify-content-md-end mt-2">
            <a className="btn btn-primary" href="/" role="button">
              Guardar
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registro;
