import React from "react";
import "./Curiosities.css";
import CuriosityList from "../../components/curiositiesjson/Curiositiesjson.js";

const Curiosities = () => {
  return (
    <div className="container-curiosities">
      <div className="overlay">
        <CuriosityList />
      </div>
      <img
        className="background-image"
        src="images/imagentexto.jpg"
        alt="Imagen con texto"
      />
    </div>
  );
};

export default Curiosities;
