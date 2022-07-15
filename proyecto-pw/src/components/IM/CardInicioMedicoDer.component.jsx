const CardInicioMedicoDer = () => {
  return (
    <div className="row mt-3">
      <div className="col-md">
        <div>
          <div className="card-body">
            <div>
              <div className="card">
                <div>
                  <img
                    src={require("../../media/IM/calendario-verde.jpg")}
                    className="card-img"
                    height="200"
                    alt="calendario"
                  />
                </div>
                <div className="card-body">
                  <div>
                    <div className="row">
                      <div className="col text-center">
                        <button type="button" className="btn">
                          <a href="/proximas-citas">Próximas citas</a>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4 mb-2">
              <div className="card">
                <div>
                  <img
                    src={require("../../media/IM/calendario.jpg")}
                    className="card-img-top"
                    height="200"
                    alt="..."
                  />
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col text-center">
                      <button type="button" className="btn">
                        <a href="/historial-citas">Historial de citas</a>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md">
        <div>
          <div className="card-body">
            <div>
              <div className="card">
                <div>
                  <img
                    src={require("../../media/IM/calendario-azul.jpg")}
                    className="card-img-top"
                    height="200"
                    alt="..."
                  />
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col text-center">
                      <button type="button" className="btn">
                        <a href="/cal-citas-med">Calendario de citas</a>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4 mb-2">
              <div className="card">
                <div>
                  <img
                    src={require("../../media/IM/mujer.jpg")}
                    className="card-img-top"
                    height="200"
                    alt="..."
                  />
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col text-center">
                      <button type="button" className="btn">
                        <a href="/preguntas-privadas">Preguntas de pacientes</a>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardInicioMedicoDer;
