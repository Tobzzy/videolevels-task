import React from "react";
import * as Styled from "./Header.styled";
import { AmplifySignOut } from "@aws-amplify/ui-react";

export const GalleryHeader = () => {
  return (
    <Styled.Header>
      <h1>Gallery Application</h1>
      <Styled.SignOut>
        <AmplifySignOut />
      </Styled.SignOut>
    </Styled.Header>
  );
};
