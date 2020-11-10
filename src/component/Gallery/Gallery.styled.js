import styled from "styled-components";

export const Gallery = styled.title(() => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  flexWrap: "wrap",
  width: "100%",
}));

export const Image = styled.img(() => ({
  width: "400px",
  height: "auto",
}));
