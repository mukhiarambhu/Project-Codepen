import React from "react";
import { AppBar, Toolbar } from "@mui/material";
import { styled } from "@mui/material/styles";

const Container = styled(AppBar)`
  background: #060606;
  height: 9vh;
  position: static;
  border-bottom: 1px solid #2f2f2f;
`;

function Header() {
  const logo =
    "https://blog.codepen.io/wp-content/uploads/2012/06/codepen-wordmark-display-inside-white@10x.png";
  return (
    <Container>
      <Toolbar>
        <img src={logo} alt="logo" style={{ width: 140 }} />
      </Toolbar>
    </Container>
  );
}

export default Header;
