import React from "react";
import "./ScrollToTopButton.css";
import arrowImage from "../../img/arrow-up.svg";

const ScrollToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button className="button-go-top" onClick={scrollToTop}>
      <img src={arrowImage} alt="Scroll to top" />
    </button>
  );
};

export default ScrollToTopButton;
