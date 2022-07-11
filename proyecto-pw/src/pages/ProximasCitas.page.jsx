import NavbarProximasCitas from "../components/NavbarProximasCitas.component";
import CardProximasCitas from "../components/CardProximasCitas.component";

const ProximasCitas = () => {
  return (
    <div>
      <NavbarProximasCitas />
      <div className="container mt-2">
        <div className="container card mt-2" id="fondo">
          <div className="card-body row" id="letra">
            <CardProximasCitas />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProximasCitas;
