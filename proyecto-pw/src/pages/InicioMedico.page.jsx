import CardInicioMedicoDer from "../components/CardInicioMedicoDer.component";
import CardInicioMedicoIzq1 from "../components/CardInicioMedicoIzq1.component";
import CardInicioMedicoIzq2 from "../components/CardInicioMedicoIzq2.component";
import NavbarInicioMedico from "../components/NavBarInicioMedico.component";

// const InicioMedico = () => {
//   return (
//     <div>
//       <NavbarInicioMedico />
//       <div className="container">
//         <div className="row">
//           <CardInicioMedicoIzq1 />
//         </div>
//         <div>
//           <CardInicioMedicoIzq2 />
//         </div>
//         <div className="col-md">
//           <div className="container card mt-4" id="card-color">
//             <div id="columnas" className="container mt-2">
//               <div>
//                 <CardInicioMedicoDer />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
const InicioMedico = () => {
  return (
    <div>
      <NavbarInicioMedico />
      <div className="container">
        <div className="row">
          <div className="col col-4">
            <CardInicioMedicoIzq1 />
            <CardInicioMedicoIzq2 />
          </div>
          <div className="col">
            <div className="card">
              <CardInicioMedicoDer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InicioMedico;
