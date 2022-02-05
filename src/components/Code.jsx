import React from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import Editor from "./Editor";
import { useContext } from "react";
import { DataContext } from "../context/DataProvider";

const Container = styled(Box)`
  background: #060606;
  height: 55vh;
  display: flex;
`;
function Code() {
  const { html, setHtml, css, setCss, js, setJs } = useContext(DataContext);
  return (
    <Container>
      <Editor
        heading="HTML"
        icon="/"
        color="#FF3C41"
        language="xml"
        value={html}
        onChange={setHtml}
      />
      <Editor
        heading="CSS"
        icon="*"
        color="#0EBEFF"
        language="css"
        value={css}
        onChange={setCss}
      />
      <Editor
        heading="JS"
        icon="()"
        color="yellow"
        language="javascript"
        value={js}
        onChange={setJs}
      />
    </Container>
  );
}

export default Code;
