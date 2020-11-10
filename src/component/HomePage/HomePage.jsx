import React, { useState, useEffect } from "react";
import * as Styled from "./HomePage.styled";
import { Gallery } from "../Gallery";

import { Storage, API, graphqlOperation } from "aws-amplify";
import { listPictures } from "../../graphql/queries";

function HomePage() {
  const [images, setImages] = useState([]);

  const getAllImagesToState = async () => {
    const result = await API.graphql(graphqlOperation(listPictures));
    let imageArray = await buildImageArray(result.data.listPictures.items);
    setImages(imageArray);
  };

  useEffect(() => {
    getAllImagesToState();
    // eslint-disable-next-line
  }, []);

  const buildImageArray = async (listPictures) => {
    return await getImagesFileList(listPictures);
  };

  const getImagesFileList = async (imageList) => {
    return Promise.all(
      imageList.map(async (i) => {
        return getOneFormatedImage(i);
      })
    );
  };

  const getOneFormatedImage = async (image) => {
    return {
      src: await Storage.get(image.file.key),
      id: image.id,
      labels: image.labels,
    };
  };

  return (
    <Styled.Home>
      <div>
        <h1>Your Image Gallery</h1>
      </div>
      <Gallery images={images} />
    </Styled.Home>
  );
}

export default HomePage;
