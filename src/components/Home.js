import React from 'react';
import { NavRouter } from '../routers/NavRouter';
import { CheckPizzaPoints } from './CheckPizzaPoints';

export const Home = () => {
    return (
        <div className="cont-home">        
            <CheckPizzaPoints />
            <NavRouter />
        </div>
    )
}
