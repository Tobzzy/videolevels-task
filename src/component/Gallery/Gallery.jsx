import React from "react";
import * as Styled from "./Gallery.styled";

export const Gallery = ({ images }) => {
  return (
    <Styled.Gallery>
      {images.length < 1 ? (
        <div>Empty Gallery, Add pictures to your gallery</div>
      ) : (
        images.map((image) => (
          <div key={image.id}>
            <Styled.Image src={image.src} />
          </div>
        ))
      )}
    </Styled.Gallery>
  );
};
