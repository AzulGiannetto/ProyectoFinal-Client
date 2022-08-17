import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

const Footer = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column"
      }}
    >
      <Box
        component="footer"
        sx={{
          py: 2,
          px: 1,
          backgroundColor: "#26A69A",
        }}
      >
        <Container maxWidth="sm">
          <Typography align="center" variant="body1">Copyright 2022</Typography>
        </Container>
      </Box>
    </Box>
  );
};
export default Footer;
