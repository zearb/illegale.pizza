import React from 'react';
import { NavRouter } from '../routers/NavRouter';
import LogoWhite from './LogoWhite';

export const Home = () => {
    return (
        <div className="cont-home">        
            <LogoWhite/>
            <NavRouter />
        </div>
    )
}
