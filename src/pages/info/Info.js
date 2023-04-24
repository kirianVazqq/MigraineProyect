import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import "./Info.css";
import Imgtext from "../../components/imgText/Imgtext";
import MapCountry from "../../components/MapCountry/MapCountry";
import CountryList from "../../services/MapCountry.service";



function Info() {
    const currentCountryList = CountryList();
    return (
        <div className="info">
            <Navbar />
            {
                <>
                <div>
                    <Imgtext
                        imageSrc="/images/imageninfoancha.jpg"
                        imageAlt="Que esla migraña"
                        h1text="Migraña, ¿Que es?"
                        text="La migraña es un trastorno del
                   cerebro que provoca dolores de cabeza muy fuertes e intensos. Este
                   dolor puede dificultar las actividades diarias y, en ocasiones,
                   viene acompañado de náuseas, sensibilidad a la luz y al ruido,
                   entre otros síntomas. La Organización Mundial de la Salud (OMS)
                   señala que la migraña es la octava enfermedad más incapacitante en
                   términos de días de vida afectados por la discapacidad."
                    />
                 
                </div>
               <MapCountry countries ={currentCountryList}/>
               
                </>
            }
            <Footer />
        </div>
    );
}

export default Info;

/*
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
                    </div>*/