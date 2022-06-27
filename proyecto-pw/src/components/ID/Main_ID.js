import doctor from '../media/media_Angelo/813844_people_512x512.png'
import mail from '../media/media_Angelo/mail.png'
import user from '../media/media_Angelo/1430453.png'



const Main_ID = () =>{
    return(
        <main>
            <div className="btn_retroceder">
                <a href="/BuscarMedico/BuscarMedico.html">
                    <button type="button" className="btn btn-secondary color-buttons">Retroceder</button>
                </a>
            </div>
            <div className="card_info">
                <span>
                    <div className="card_info_img">
                    <img src={doctor} alt=""/>
                    </div>
                </span>
                <span>
                    <div>Dr. ROSS, GELLER</div>
                    <div>Especialidad: Neurocirugia</div>
                    <div>Ubicación de consulta: Manuel Olguin 1050</div>
                </span>
                <span>
                <a href="/mensaje_privado/crear_mensaje_privado.html">
                    <div className="card_info_msg">
                    <img src={mail} alt=""/>
                    </div>
                </a>
                </span>
            </div>
            <div className="card_prices">
                <div>
                    <span>Tipo de atención: </span> 
                    <span className="ms-5">Virtual</span>
                </div>
                <div>
                    <span>Precio de consulta:</span> 
                    <span className="ms-5">50</span>
                </div>
            </div>
            <div className="card_calendar">
                <div>
                    Horarios Disponibles
                </div>
                <div>
                    <table className="table caption-top text-center table-bordered">
                        <thead>
                        <tr>
                            <th scope="col">09/05/22</th>
                            <th scope="col">10/05/22</th>
                            <th scope="col">11/05/22</th>
                            <th scope="col">12/05/22</th>
                            <th scope="col">13/05/22</th>
                            <th scope="col">14/05/22</th>
                            <th scope="col">15/05/22</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>
                            <button type="button" className="btn btn-info color-buttons">9:50am</button>
                            </td>
                            <td>
                            <button type="button" className="btn btn-info color-buttons">9:50am</button>
                            </td>
                            <td>
                            <button type="button" className="btn btn-info color-buttons">9:50am</button>
                            </td>
                            <td>
                            <button type="button" className="btn btn-info color-buttons">9:50am</button>
                            </td>
                            <td>
                            <button type="button" className="btn btn-info color-buttons">9:50am</button>
                            </td>
                            <td>
                            <button type="button" className="btn btn-info color-buttons">9:50am</button>
                            </td>
                            <td>
                            <button type="button" className="btn btn-info color-buttons">9:50am</button>
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>
                            <button type="button" className="btn btn-info color-buttons">11:00am</button>
                            </td>
                            <td>
                            <button type="button" className="btn btn-info color-buttons">11:00am</button>
                            </td>
                            <td></td>
                            <td>
                            <button type="button" className="btn btn-info color-buttons">10:40am</button>
                            </td>
                            <td>
                            <button type="button" className="btn btn-info color-buttons">11:00am</button>
                            </td>
                        </tr>
                        <tr>
                            <td>
                            <button type="button" className="btn btn-info color-buttons">11:50am</button>
                            </td>
                            <td></td>
                            <td>
                            <button type="button" className="btn btn-info color-buttons">11:50am</button>
                            </td>
                            <td>
                            <button type="button" className="btn btn-info color-buttons">11:40am</button>
                            </td>
                            <td>
                            <button type="button" className="btn btn-info color-buttons">12:00pm</button>
                            </td>
                            <td></td>
                            <td>
                            <button type="button" className="btn btn-info color-buttons">1:05pm</button>
                            </td>
                        </tr>
                        <tr>
                            <td>
                            <button type="button" className="btn btn-info color-buttons">12:45pm</button>
                            </td>
                            <td></td>
                            <td>
                            <button type="button" className="btn btn-info color-buttons">2:00pm</button>
                            </td>
                            <td>
                            <button type="button" className="btn btn-info color-buttons">2:00pm</button>
                            </td>
                            <td></td>
                            <td></td>
                            <td>
                            <button type="button" className="btn btn-info color-buttons">1:30pm</button>
                            </td>
                        </tr>
                        <tr>
                            <td>
                            <button type="button" className="btn btn-info color-buttons">2:10pm</button>
                            </td>
                            <td></td>
                            <td>
                            <button type="button" className="btn btn-info color-buttons">3:00pm</button>
                            </td>
                            <td>
                            <button type="button" className="btn btn-info color-buttons">3:00pm</button>
                            </td>
                            <td></td>
                            <td></td>
                            <td>
                            <button type="button" className="btn btn-info color-buttons">2:30pm</button>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="doctor_comments">
                <div>Comentarios sobre el doctor:</div>
                <div className="user_comment">
                    <div className="user_info">
                    <div className="card_info_img_2">
                        <img src={user} alt=""/>
                    </div>
                        Rachel Green
                    </div>
                    <div>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ex ut lacus imperdiet, in congue ipsum semper. Aenean lacus felis, iaculis non mauris nec, mattis eleifend purus.Aenean tincidunt turpis purus, non dictum neque dapibus vel. Etiam consequat a metus vitae tincidunt. Nulla non sapien et ipsum tempus eleifend. Proin pretium ex feugiat convallis maximus. Nam mollis, urna sit amet ultricies elementum, ante orci pellentesque ligula, eget mattis ipsum augue non ligula
                    </div>
                </div>
            </div>
            <div className="doctor_comments">
            
                <div className="user_comment">
                    <div className="user_info">
                    <div className="card_info_img_2">
                        <img src={user} alt=""/>
                    </div>
                        Monica Geller
                    </div>
                    <div>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ex ut lacus imperdiet, in congue ipsum semper. Aenean lacus felis, iaculis non mauris nec, mattis eleifend purus.Aenean tincidunt turpis purus, non dictum neque dapibus vel. Etiam consequat a metus vitae tincidunt. Nulla non sapien et ipsum tempus eleifend. Proin pretium ex feugiat convallis maximus. Nam mollis, urna sit amet ultricies elementum, ante orci pellentesque ligula, eget mattis ipsum augue non ligula
                    </div>
                </div>
            </div>
        </main>
    )

}

export default Main_ID