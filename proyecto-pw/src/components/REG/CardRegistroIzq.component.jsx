const CardRegistroIzq = () => {
    return <div className="card mt-3" id="card-color">
    <div className="card-body">
      <div className="form-label">
        <label className="form-label h4 mt-2" id="letra">Datos de contacto</label>    
      </div>
      <div>
        <label className="form-label mt-2 h5" id="letra">Email:</label>
        <input type="text" className="form-control mt-2 mb-2"/>
        <label className="form-label mt-2 h5" id="letra">Telefono:</label>
        <input type="text" className="form-control mt-2 mb-2"/>
      </div>
    </div>
  </div>
}

export default CardRegistroIzq