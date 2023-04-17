// Footer.js
import React from 'react';
import './Curiosities.css';

const Curiosities = () => {
    return (
        <div className="container-curiosities">
            <button>CURIOSIDADES</button>
            <p className="text-on-image">
                Migrañas en jóvenes: Afectan al 80% de pacientes antes de los 30 años, más comunes en mujeres que en hombres desde la adolescencia.
            </p>
            <img src="images/imagentexto.jpg" alt="Imagen con texto"></img>
        </div>
    );
};

export default Curiosities;
