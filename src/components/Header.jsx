import React from "react";
import { AppBar, Toolbar } from "@mui/material";
import { styled } from "@mui/material/styles";

const Container = styled(AppBar)`
  background: #060606;
  /* height: 18vh; */
`;

function Header() {
  const logo =
    "https://scontent.fbom5-1.fna.fbcdn.net/v/t1.18169-9/11987068_439074989630521_7907475566801370427_n.png?_nc_cat=109&ccb=1-5&_nc_sid=e3f864&_nc_ohc=b9O9EadlknAAX8pt-U1&_nc_ht=scontent.fbom5-1.fna&oh=00_AT_tHaDz6mD96TPOeO8MuN1gf6gfdZeOGDs9bVIKEFDNmw&oe=6225E1B8";
  return (
    <Container>
      <Toolbar>
        <img src={logo} alt="logo" style={{ width: 160 }} />
      </Toolbar>
    </Container>
  );
}

export default Header;
