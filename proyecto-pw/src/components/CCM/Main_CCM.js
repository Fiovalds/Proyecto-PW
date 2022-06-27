import '../../css/CCM/main.css';
import '../../css/CCM/cal_citas_med.css';
import Mayo from '../../html/CCM/Mayo'
import Abril from '../../html/CCM/Abril'
import Junio from '../../html/CCM/Junio'
import { useState } from 'react';


const Main_CCM = () => {
    const [newHtml, setNewHtml] = useState(Mayo)
    function Previous(){
        setNewHtml(Abril)
    }
    function Next(){
        setNewHtml(Junio)
    }
    return (
        <main>
            <div className="btn_cal_citas">
                <a href="#" onClick={Previous}>
                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="#00838F" stroke-width="2" stroke-linecap="round" stroke-Linejoin="round" className="feather feather-arrow-left-circle"><circle cx="12" cy="12" r="10"/><polyline points="12 8 8 12 12 16"/><line x1="16" y1="12" x2="8" y2="12"/></svg>
                </a>
                <a href="#" onClick={Next}>
                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="#00838F" stroke-width="2" stroke-linecap="round" stroke-Linejoin="round" className="feather feather-arrow-right-circle"><circle cx="12" cy="12" r="10"/><polyline points="12 16 16 12 12 8"/><line x1="8" y1="12" x2="16" y2="12"/></svg>
                </a>
            </div>
            {newHtml}
        </main>
    )

}

export default Main_CCM