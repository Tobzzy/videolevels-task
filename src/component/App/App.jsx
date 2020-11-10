import React from "react";
import { Route } from "react-router-dom";
import * as Styled from "./App.styled";
import { withAuthenticator } from "@aws-amplify/ui-react";
import UploadImage from "../UploadImage/UploadImage";
import { GalleryHeader } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import HomePage from "../HomePage/HomePage";
function App() {
  return (
    <Styled.App>
      <Styled.Global />
      <GalleryHeader />
      <Styled.Main>
        <Route exact path="/">
          <Styled.Content>
            <UploadImage />
            <HomePage />
          </Styled.Content>
        </Route>
      </Styled.Main>
      <Footer />
    </Styled.App>
  );
}

export default withAuthenticator(App);
