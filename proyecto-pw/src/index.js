import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Pagina_REP from './pages/Pagina_REP';
import Pagina_LOG from './pages/Pagina_LOG';
import Pagina_REE from './pages/Pagina_REE';
import Pagina_RC from './pages/Pagina_RC';
import Pagina_INP from './pages/Pagina_INP';
import InicioMedico from './pages/InicioMedico.page';
import HistorialCitas from './pages/HistorialCitas.page';
import Pagina_HC from './pages/Pagina_HC';
import Pagina_BUZ from './pages/Pagina_BUZ'
import Pagina_BAND from './pages/Pagina_BAND';
import Pagina_CP from './pages/Pagina_CP';
import BuscarMedico from './pages/BuscarMedico.page';
import Pagina_EP from './pages/Pagina_EP';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/RegistroPaciente' element={<Pagina_REP/>}/>
      <Route path='' element={<Pagina_LOG/>}/>
      <Route path='/RegistroEspecialista' element={<Pagina_REE/>}/>
      <Route path='/RecuperarContra' element={<Pagina_RC/>}/>
      <Route path='/InicioPaciente' element={<Pagina_INP/>}/>
      <Route path='/InicioMedico' element={<InicioMedico/>}/>
      <Route path='/HistorialCitas' element={<HistorialCitas/>}/>
      <Route path='/BuzonPrivado' element={<Pagina_BUZ/>}/>
      <Route path='/BandejaPublica' element={<Pagina_BAND/>}/>
      <Route path='/MisCitas' element={<Pagina_CP/>}/>
      <Route path='/BuscarMedico' element={<BuscarMedico/>}/>
      <Route path='/EditarPerfil' element={<Pagina_EP/>}/>
    </Routes>
    </BrowserRouter>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
