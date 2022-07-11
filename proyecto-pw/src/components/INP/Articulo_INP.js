import React from "react"


const Articulo_INP = (props) =>{
    return(
        <div className="col-sm-6">
            <div className="card-body">
                <div className="card">
                    <div>
                        <img src={props.item.src_image} className="card-img" alt="..."/>
                    </div>
                    <div className="card-body">
                        <div>
                            <div className="row">
                                <div className="col text-center ">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam cursus nulla quis faucibus.</p>
                                </div> 
                            </div>
                        </div>
                    </div>
                 </div>
            </div>
        </div>
    )}

    export default Articulo_INP