import React from "react";

function ExampleCarouselImage({ imageSrc, altText, text }) {
  return (
    <div className="w-100 d-flex justify-content-center align-items-center">
      <img
        src={imageSrc}
        alt={altText}
        className="d-block w-50 d-flex justify-content-center align-items-center"
      />
      <p>{text}</p>
    </div>
  );
}

export default ExampleCarouselImage;
