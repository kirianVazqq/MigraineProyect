import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import "./Info.css";

function Info() {
    return (
        <div className="info">
            <Navbar />
            {
                <>
                    <div className="img-text">
                        <h1>Migraña, ¿Que es?</h1>
                        <p>
                            La migraña es un trastorno del
                            cerebro que provoca dolores de cabeza muy fuertes e intensos. Este
                            dolor puede dificultar las actividades diarias y, en ocasiones,
                            viene acompañado de náuseas, sensibilidad a la luz y al ruido,
                            entre otros síntomas. La Organización Mundial de la Salud (OMS)
                            señala que la migraña es la octava enfermedad más incapacitante en
                            términos de días de vida afectados por la discapacidad.
                        </p>


                        <img src="/images/imageninfoancha.jpg"></img>
                    </div>
                </>
            }
            <Footer />
        </div>
    );
}

export default Info;
