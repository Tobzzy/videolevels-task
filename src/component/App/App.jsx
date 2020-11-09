import React from "react";
import { Route } from "react-router-dom";
import * as Styled from "./App.styled";
import { AmplifyAuthenticator } from "@aws-amplify/ui-react";
import UploadImage from "../UploadImage/UploadImage";
import { GalleryHeader } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import HomePage from "../HomePage/HomePage";
function App() {
  return (
    <AmplifyAuthenticator>
      <Styled.App>
        <Styled.Global />
        <GalleryHeader />
        <Styled.Main>
          <Styled.Content>
            <Route exact path="/">
              <UploadImage />
              <HomePage />
            </Route>
          </Styled.Content>
        </Styled.Main>
        <Footer />
      </Styled.App>
    </AmplifyAuthenticator>
  );
}

export default App;
