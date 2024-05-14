import React from "react";
import redes from "../imágenes/redes.png"

const CompFooter = () => {
    return (
        <div>
            <div className="card-body">
                <h4 className="card -titel">Direccion calle 121 #64-25</h4>
                <p className="card-text">correo telefono</p>
                <img src={redes} className="App-logo1" alt="logo"/>
            </div>
            <div className ="card-footer text-muted"> Horario</div>
        </div>
    )
}
export default CompFooter;