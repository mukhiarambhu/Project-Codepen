import React from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const Heading = styled(Box)`
  background: #1d1e22;
  display: flex;
  padding: 9px 12px;
`;

const Header = styled(Box)`
  display: flex;
  justify-content: space-between;
  background: #060606;
  color: #aaaebc;
  font-weight: 700;
`;

const Container = styled(Box)`
  flex-grow: 1;
  flex-basic: 0;
  flex-direction: column;
  display: flex;
  padding: 0px 8px 8px;
`;

function Editor({ heading, icon, color }) {
  return (
    <Container>
      <Header>
        <Heading>
          <Box
            component="span"
            style={{
              background: color,
              height: 20,
              width: 20,
              color: "#000",
              display: "flex",
              placeContent: "center",
              paddingBottom: 2,
              borderRadius: 5,
              marginRight: 5,
            }}
          >
            {icon}
          </Box>
          {heading}
        </Heading>
      </Header>
    </Container>
  );
}

export default Editor;
