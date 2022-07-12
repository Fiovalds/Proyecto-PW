import NavbarHorarioAtencion from "../components/HA/NavbarHorarioAtencion.component";
import TablaHorarioAtencion from "../components/HA/TablaHorarioAtencion.component";

const HorarioAtencionPage = () => {
  return (
    <div>
      <NavbarHorarioAtencion />
      <div className="container mt-5 table-responsive text-center">
        <TablaHorarioAtencion />
      </div>
    </div>
  );
};

export default HorarioAtencionPage;
