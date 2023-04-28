import React, { useState, useEffect } from "react";
import "./ImageCarousel.css";

const ImageCarousel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToNextImage = () => {
    setCurrentImageIndex((currentImageIndex + 1) % images.length);
  };

  const goToPreviousImage = () => {
    setCurrentImageIndex(
      (currentImageIndex - 1 + images.length) % images.length
    );
  };

  useEffect(() => {
    const interval = setInterval(goToNextImage, 4000); // cambia 3000 por el tiempo deseado en milisegundos
    return () => clearInterval(interval);
  }, [currentImageIndex]);

  return (
    <div className="carousel-container">
      <img
        src={images[currentImageIndex]}
        alt={`Carousel image ${currentImageIndex}`}
        className="carousel-image"
      />
      <button onClick={goToPreviousImage} className="carousel-button left">
        &#8249;
      </button>
      <button onClick={goToNextImage} className="carousel-button right">
        &#8250;
      </button>
    </div>
  );
};

export default ImageCarousel;





