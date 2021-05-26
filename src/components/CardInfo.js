import React from 'react'

export const CardInfo = (props) => {
    return (
        <div className="card-info__content">
            <img src="isotipo-blanco-fondo-negro.svg" alt='icon-card-info' />
            <p className="info-puntos">
                Hola! {props.nombre},<br/>
                tienes <span>{props.pizzapuntos}</span> pizzaPuntos.
            </p>
            <p className="data-extra">
                Acumula tus puntos y llevate por: <br/>
                - 4 pizzaPuntos: 1 pizza personal gratis!! <br/>
                - 8 pizzaPuntos:  1 pizza familiar gratis!! <br/>
            </p>
        </div>
    )
}
