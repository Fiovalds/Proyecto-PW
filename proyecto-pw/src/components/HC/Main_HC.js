import '../css/HC/main.css';
import '../css/HC/historial_citas.css';
import imagen1 from '../media/HC/img_historial_citas1.jpeg'
import imagen2 from '../media/HC/img_historial_citas2.jpeg'
import imagen3 from '../media/HC/img_historial_citas3.jpeg'
import { useState } from 'react';

const Main_HC = () => {
    const [newImg, setNewImg] = useState(null)
    function Dia(){
        setNewImg(
            newImg => <img src={imagen1} alt=""/>
        )
    }
    function Semana(){
        setNewImg(
            newImg => <img src={imagen2} alt=""/>
        )
    }
    function Mes(){
        setNewImg(
            newImg => <img src={imagen3} alt=""/>
        )
    }
    return (
        <main>
            <div className="btn_hist">
                <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle color-buttons" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    Frecuencia
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li><a className="dropdown-item" href="#" onClick={Dia}>Dia</a></li>
                    <li><a className="dropdown-item" href="#" onClick={Semana}>Semana</a></li>
                    <li><a className="dropdown-item" href="#" onClick={Mes}>Mes</a></li>
                    </ul>
                </div>
            </div>
            <div className="gra_hist">
                {newImg}
            </div>
        </main>
    )
}
export default Main_HC