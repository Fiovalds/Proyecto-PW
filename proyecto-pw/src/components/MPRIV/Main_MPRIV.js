import '../../css/MPRIV/mensaje2.css'

const Main_MPRIV = () =>{
    return(
        <div>
            <div className="container">  
      <div className="border border-dark borde"  id="caja" >
        
        <div id="columnas_superiores" className="row" >
          <div className="col">
              De:  <input id="col11"  type="text"  placeholder="" />
          </div>
          <div className="col">
            Para:  <input id="col11"  type="text"  placeholder="" /> 
          </div>                  
          <div className="col d-flex flex-row-reverse" id="last_col" >
            <input id="col11"  type="date"  placeholder="" /> 
          </div>    
        </div> 

        <div id="asunto_text" >Asunto: <input id="asunto_box"  type="text"  placeholder="" /> 
        </div>

        <div>
          <h1 id="tam_h1" >Redacte</h1>
        </div>

        <div  >
          <textarea id="texto_escrbir" rows="10" cols="30">        
          </textarea>  
        </div>
      
        <div id="pre_Sent color-buttons" >
            <a href="/buzon/buzon.html" > <button id="sent" type="button" className="btn btn-primary btn-lg color-buttons" >Enviar Mensaje</button></a>
          </div>
          
    </div>
    </div>
        </div>            
    )
}

export default Main_MPRIV