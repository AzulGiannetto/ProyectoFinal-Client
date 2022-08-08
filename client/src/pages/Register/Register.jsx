import * as React from "react";
import { TextField, Grid, Typography, Button, Stack, Box } from "@mui/material";
import Footer from "../../components/Footer/Footer";

const Register = () => {
  return (
    <div>
      <Grid
        display="flex"
        container
        spacing={5}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: "98vh" }}
      >
        <Box flexGrow={1}>
          <Typography
            p={"50px"}
            mt={"50px"}
            align="center"
            variant="h3"
            sx={{ color: "#02a663" }}
          >
            Register
          </Typography>
          <Grid justifyContent="center" container spacing={2}>
            <Grid item xs={5}>
              <TextField
                id="filled-basic"
                label="Username"
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
            </Grid>
            <Grid item xs={3}>
              <TextField
                id="filled-basic"
                label="Date"
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
            </Grid>
            <Grid item xs={8}>
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
            </Grid>
            <Grid item xs={8}>
              <TextField
                id="filled-basic"
                label="Password"
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
            </Grid>
          </Grid>
          <Grid>
            <Stack spacing={2} alignItems="center">
              <Button
                style={{
                  backgroundColor: "#0fb66e",
                  color: "#000000",
                  width: "150px",
                }}
              >
                Sign In
              </Button>
            </Stack>
          </Grid>
        </Box>
      </Grid>
      <Footer />
    </div>
  );
};
export default Register;
