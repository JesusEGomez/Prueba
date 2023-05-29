import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Landing.module.css';
import fondoVideo from '../../assets/video/prueba.mp4';

export default function Landing(){
    return(
        <div className={style.container}>
            <div>

                <div className={style.texto}>
                    <h1 className={style.titulo}>Bienvenido a Pet Venture</h1>
                    <p className={style.descripcion}>Tu sitio de adopcion y compra de productos</p>
                    <NavLink to="/home">
                    <button className={style.button}>Más información</button>
                </NavLink>
                <video autoPlay loop muted className={style.video}>
                <source src={fondoVideo} type="video/mp4"  />
                </video>
                </div>
            </div>
        </div>
    )
};



