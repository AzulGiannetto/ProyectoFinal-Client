import * as React from "react";
import { TextField, Grid, Typography, Button, Stack } from "@mui/material";
import Footer from "../../components/Footer/Footer"

const Login = () => {
  return (
    <div>
      <Grid
        container
        spacing={5}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: "97.5vh" }}
      >
        <Typography align="center" variant="h3" sx={{ color: "#02a663" }}>
          Login
        </Typography>
        <Grid item xs={3}>
          <TextField
            id="filled-basic"
            label="Email"
            variant="filled"
            fullWidth
            style={{ marginBottom: "2em" }}
            sx={{
              input: {
                backgroundColor: "#0C0C0C",
                color: "#0fb66e",
              },
              label: {
                color: "#02a663",
              },
            }}
          />

          <TextField
            label="Password"
            fullWidth
            id="outlined-basic"
            variant="filled"
            style={{ marginBottom: "2em" }}
            sx={{
              input: {
                backgroundColor: "#0C0C0C",
                color: "#0fb66e",
              },
              label: {
                color: "#02a663",
              },
            }}
          />
        </Grid>
        <Stack spacing={2}>
          <Button style={{ backgroundColor: "#0fb66e", color: "#000000" }}>
            Sign In
          </Button>
          <Button
            style={{
              width: "150px",
              backgroundColor: "#02a663",
              color: "#000000",
            }}
          >
            Sign Up
          </Button>
        </Stack>
      </Grid>
      <Footer/>
    </div>
  );
};
export default Login;
