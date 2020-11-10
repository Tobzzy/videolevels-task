import styled from "styled-components";

export const Header = styled.title(() => ({
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
  backgroundColor: "#9a9a9a",
  height: "60px",
  alignItems: "center",
}));

export const SignOut = styled.div(() => ({
  padding: "1rem",
  display: "flex",
  justifyContent: "space-between",
}));
