import React, { useState } from "react";
import CuriositiesService from "../../services/Curiosities.service";
import "./Curiositiesjson.css";

function CuriosityList() {
  const [curiosity, setCuriosity] = useState({ title: "", text: "" });

  const getRandomCuriosity = () => {
    const allCuriosities = CuriositiesService.getCuriosities();
    const randomIndex = Math.floor(Math.random() * allCuriosities.length);
    setCuriosity(allCuriosities[randomIndex]);
  };

  return (
    <>
      <button className="button-curiosities" onClick={getRandomCuriosity}>
        Mostrar curiosidad
      </button>
      <p className="text-on-image">
        {curiosity.title
          ? `${curiosity.title}: ${curiosity.text}`
          : "Presiona el botón para mostrar una curiosidad"}
      </p>
    </>
  );
}

export default CuriosityList;
