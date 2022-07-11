const TablaHorarioAtencion = () => {
  const TITLES = [
    "Horas",
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabados",
    "Domingos",
  ];
  const time = [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21];

  return (
    <table className="table table-bordered mt-5">
      {/* <tr>
        {TITLES.map((item, index) => {
          return <th>{item}</th>;
        })}
      </tr> */}
      {time.map((time, indexTime) => {
        return (
          <tr>
            {TITLES.map((titles, indexTitles) => {
              if (indexTime === 0) {
                return <td>{titles}</td>;
              } else {
                if (indexTitles === 0) {
                  return <td>{time}</td>;
                } else {
                  return (
                    <td>
                      <button
                        type="button"
                        className="btn btn-primary btn-sm"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      >
                        +agregar
                      </button>
                    </td>
                  );
                }
              }
            })}
          </tr>
        );
      })}
      {/* {time.map((item, index) => {
        if (index === 0) {
          return (
            <tr>
              <td>hola</td>;
            </tr>
          );
        } else {
          return (
            <tr>
              <td>
                <button
                  type="button"
                  className="btn btn-primary btn-sm"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  +agregar
                </button>
              </td>
            </tr>
          );
        }
      })} */}
      {/* <tr>
        <td>6:00</td>
        <td>
          <button
            type="button"
            className="btn btn-primary btn-sm"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            +agregar
          </button> */}
      {/* <div
            className="modal fade"
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Tipo de atención
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineRadio1"
                      value="option1"
                    />
                    <label className="form-check-label" for="inlineRadio1">
                      Presencial
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineRadio2"
                      value="option2"
                    />
                    <label className="form-check-label" for="inlineRadio2">
                      Virtual
                    </label>
                  </div>
                </div>
                <div className="container">
                  <label>*Link en caso la cita sea virtual</label>
                </div>
                <div className="container form-floating mt-4 mb-2">
                  <input
                    type="email"
                    className="form-control"
                    id="floatingInput"
                  />
                  <label for="floatingInput">Ej. Zoom, Teams, Meet, etc.</label>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Cerrar
                  </button>
                  <button type="button" className="btn btn-primary">
                    Guardar cambios
                  </button>
                </div>
              </div>
            </div>
          </div>
         */}
      {/* </td>
      </tr> */}
    </table>
  );
};

export default TablaHorarioAtencion;
