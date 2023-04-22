import React from 'react';
import './Imgtext.css';

const Imgtext = (props) => {
  const { imageSrc, imageAlt,h1text, text } = props;

  return (
    <div className="image-container">
      <img src={imageSrc} alt={imageAlt} />
      <h1>{h1text}</h1>
      <p>{text}</p>
    </div>
  );
};

export default Imgtext;
