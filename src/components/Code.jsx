import React from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import Editor from "./Editor";

const Container = styled(Box)`
  background: #060606;
  height: 50vh;
  display: flex;
`;
function Code() {
  return (
    <Container>
      <Editor heading="HTML" icon="/" color="#FF3C41" />
      <Editor heading="CSS" icon="*" color="#0EBEFF" />
      <Editor heading="JS" icon="()" color="yellow" />
    </Container>
  );
}

export default Code;
