import '../../css/MPUB/mensajes.css'

const Main_MPUB = () =>{
    return(
        <section>
            <div className="container button_mpub_row_rev">
                <a href="/bandeja/Bandeja_de_entrada.html" >  
                <button id="button_id"  type="button" className="btn btn-btn-primary btn-lg color-buttons" >Retroceder</button>	</a>
            </div>
            <div className="container">  
            <div className="border border-dark borde"  id="caja" >
                
                <div id="columnas_superiores" className="row" >
                <div className="col">
                    De:  <input id="col11"  type="text"  placeholder="" />
                </div>                  
                <div className="col d-flex flex-row-reverse antifrr" id="last_col" >
                    <input id="col11" type="date"  placeholder="" />
                </div>    
                </div> 

                <div id="asunto_text" >Asunto: <input id="col11"  type="text" placeholder=""/>
                </div>

                <div>
                <h1 id="tam_h1" >Redacte</h1>
                </div>

                <div  >
                <textarea id="texto_escrbir" rows="10" cols="30">        
                </textarea>  
                </div>
            
                <div id="pre_Sent color-buttons" >
                    <a href="/bandeja/Bandeja_de_entrada.html" > <button id="sent" type="button" className="btn btn-primary btn-lg color-buttons" >Enviar Mensaje</button></a>
                </div>
                
            </div>
            </div>
        </section>            
    )
}

export default Main_MPUB