import React from "react";
import * as Styled from "./Header.styled";
import { AmplifySignOut } from "@aws-amplify/ui-react";

export const GalleryHeader = () => {
  return (
    <Styled.Header>
      <h2>Gallery Application</h2>
      <Styled.SignOut>
        <AmplifySignOut />
      </Styled.SignOut>
    </Styled.Header>
  );
};
