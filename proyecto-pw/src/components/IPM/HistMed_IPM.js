import '../../css/IPM/info_pac_med.css'
import '../../css/IPM/main.css'

const HistMed_IPM = () =>{
    return(
        <section>
            <h1 className="mt-5 mb-3 header_titles">Historial medico:</h1>
            <div className="card_info_pac_med">
                <div className="card mt-2">
                    <div className="card-body searchshow_card table-responsive">
                        <div className="col-md-3 me-auto">
                            <label className="form-label">Buscar:</label>
                            <input type="text" className="form-control"/>
                        </div>
                        <div className="col-md-1">
                            <label className="form-label">Mostrar</label>
                            <div className="dropstart">
                                <a className="btn btn-secondary dropdown-toggle color-buttons" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                5
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                <li><a className="dropdown-item" href="#">6</a></li>
                                <li><a className="dropdown-item" href="#">8</a></li>
                                <li><a className="dropdown-item" href="#">10</a></li>
                                </ul>
                            </div>
                            <label className="form-label">Filas</label>
                        </div>
                    </div>
                    <div className="table-responsive">
                        <table className="table text-center">
                        <tr>
                            <th>Medico</th>
                            <th>Fecha de Atención</th>
                            <th className="diagnostico_head" >Diagnostico</th>
                            <th>Medicina recetada</th>
                        </tr>
                        <tr>
                            <td>APELLIDOS, NOMBRES <p>Especialidad</p></td>
                            <td>DD MM YY | Hora</td>
                            <td className="diagnostico_body">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ex ut lacus imperdiet, in congue ipsum semper. Aenean
                            </td>
                            <td className="diagnostico_body">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ex ut lacus imperdiet, in congue ipsum semper. Aenean
                            </td>
                        </tr>
                        <tr>
                            <td>APELLIDOS, NOMBRES <p>Especialidad</p></td>
                            <td>DD MM YY | Hora</td>
                            <td className="diagnostico_body">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ex ut lacus imperdiet, in congue ipsum semper. Aenean
                            </td>
                            <td className="diagnostico_body">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ex ut lacus imperdiet, in congue ipsum semper. Aenean
                            </td>
                        </tr>
                        <tr>
                            <td>APELLIDOS, NOMBRES <p>Especialidad</p></td>
                            <td>DD MM YY | Hora</td>
                            <td className="diagnostico_body">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ex ut lacus imperdiet, in congue ipsum semper. Aenean
                            </td>
                            <td className="diagnostico_body">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ex ut lacus imperdiet, in congue ipsum semper. Aenean
                            </td>
                        </tr>
                        <tr>
                            <td>APELLIDOS, NOMBRES <p>Especialidad</p></td>
                            <td>DD MM YY | Hora</td>
                            <td className="diagnostico_body">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ex ut lacus imperdiet, in congue ipsum semper. Aenean
                            </td>
                            <td className="diagnostico_body">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ex ut lacus imperdiet, in congue ipsum semper. Aenean
                            </td>
                        </tr>
                        <tr>
                            <td>APELLIDOS, NOMBRES <p>Especialidad</p></td>
                            <td>DD MM YY | Hora</td>
                            <td className="diagnostico_body">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ex ut lacus imperdiet, in congue ipsum semper. Aenean
                            </td>
                            <td className="diagnostico_body">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ex ut lacus imperdiet, in congue ipsum semper. Aenean
                            </td>
                        </tr>
                        </table>
                        
                    </div>
                    <div className="container">
                        <nav>
                            <ul className="pagination">
                                <li className="page-item">
                                    <a className="page-link color-buttons-other" href="#">Antes</a>
                                </li>
                                <li className="page-item active color-buttons">
                                    <a className="page-link color-buttons" href="#">1</a>
                                </li>
                                <li className="page-item">
                                    <a className="page-link color-buttons-other" href="#">Siguiente</a>
                                </li>
                            </ul>
                        </nav>
                    </div> 
                </div>
                <div className="btn_info_pac mt-4 mb-4">
                    
                    <button type="button" className="btn btn-success color-buttons" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Culminar cita</button>
                        <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                            <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header justify-content-center flex-column">
                                <h5 className="modal-title id=staticBackdropLabel" >¡Su cita se ha registrado!</h5>
                                <h6 className="modal-title id=staticBackdropLabel" >¿Desea agregar una cita adicional?</h6>
                                </div>
                                <div className="modal-footer flex-row">
                                    <a href="../registrar_cita_med/registrar_cita_med.html"><button type="button" className="btn btn-success" data-bs-dismiss="modal">Sī, agregar</button></a> 
                                    <a href="/inicioMedico/inicioMedico.html"><button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Finalizar atención</button></a> 
                                </div>
                            </div>
                            </div>
                        </div>
                </div>
            </div>
        </section>
    )
}

export default HistMed_IPM