import React from "react";
import "./Prueba.css";

import MapCountry from "../../components/MapCountry/MapCountry";
import CountryList from "../../services/MapCountry.service";



function Prueba() {
    const currentCountryList = CountryList();
    return (
        <>
        <h1>Bicycle Shopify</h1>
        <MapCountry countries ={currentCountryList}/>
        </>
    );
}

export default Prueba;