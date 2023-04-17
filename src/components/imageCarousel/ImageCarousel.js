// ImageCarousel.js
import React, { useState } from "react";
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





