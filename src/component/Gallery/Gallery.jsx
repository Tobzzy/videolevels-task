import React from "react";

export const Gallery = ({ images }) => {
  return (
    <div>
      {images.map((image) => (
        <div key={image.id}>
          <img src={image.src} alt="not found" width="300" />
        </div>
      ))}
    </div>
  );
};
