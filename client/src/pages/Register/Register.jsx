import * as React from "react";
import { useState } from "react";
import { TextField, Grid, Typography, Button, Stack, Box } from "@mui/material";
import Footer from "../../components/Footer/Footer";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Register = () => {
  const [firstname, setFirstname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [profileImg, setProfileImg] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleImage = (e) => {
    setProfileImg(e.target.value);
  };
  const handleFirstname = (e) => {
    setFirstname(e.target.value);
  };

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleClickRegister = async (e) => {
    e.preventDefault();
    await axios
      .post(`http://localhost:8080/auth/register`, {
        firstname: firstname,
        username: username,
        email: email,
        password: password,
        profilePhoto: profileImg,
      })
      .then((res) => {
        if (res.statusText === "Created") {
          navigate("/");
          setError(false);
        }
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
        setError(true);
      });
  };
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
            sx={{ color: "#00ACC1" }}
          >
            Register
          </Typography>
          <Grid justifyContent="center" container spacing={2}>
            <Grid item xs={5}>
              <TextField
                onChange={handleFirstname}
                id="filled-basic"
                label="FirstName"
                variant="filled"
                fullWidth
                style={{ marginBottom: "2em" }}
                sx={{
                  input: {
                    backgroundColor: "#232323",
                    color: "#00ACC1",
                  },
                  label: {
                    color: "#00ACC1",
                  },
                }}
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                onChange={handleUsername}
                id="filled-basic"
                label="username"
                variant="filled"
                fullWidth
                style={{ marginBottom: "2em" }}
                sx={{
                  input: {
                    backgroundColor: "#232323",
                    color: "##00ACC1",
                  },
                  label: {
                    color: "#00ACC1",
                  },
                }}
              />
            </Grid>
            <Grid item xs={8}>
              <TextField
                onChange={handleEmail}
                id="filled-basic"
                label="Email"
                variant="filled"
                fullWidth
                style={{ marginBottom: "2em" }}
                sx={{
                  input: {
                    backgroundColor: "#232323",
                    color: "#00ACC1",
                  },
                  label: {
                    color: "#00ACC1",
                  },
                }}
              />
            </Grid>
            <Grid item xs={8}>
              <TextField
                type="password"
                onChange={handlePassword}
                id="filled-basic"
                label="Password"
                variant="filled"
                fullWidth
                style={{ marginBottom: "2em" }}
                sx={{
                  input: {
                    backgroundColor: "#232323",
                    color: "#00ACC1",
                  },
                  label: {
                    color: "#00ACC1",
                  },
                }}
              />
            </Grid>
            <Grid item xs={8}>
              <TextField
                onChange={handleImage}
                id="filled-basic"
                label="ImageUrl"
                variant="filled"
                fullWidth
                style={{ marginBottom: "2em" }}
                sx={{
                  input: {
                    backgroundColor: "#232323",
                    color: "#00ACC1",
                  },
                  label: {
                    color: "#00ACC1",
                  },
                }}
              />
            </Grid>
          </Grid>
          <Grid>
            <Stack spacing={2} alignItems="center">
              <Button
                onClick={handleClickRegister}
                style={{
                  backgroundColor: "#006064",
                  color: "#ffffff",
                  width: "150px",
                }}
              >
                Sign In
              </Button>
            </Stack>
          </Grid>
        </Box>
      </Grid>
    </div>
  );
};
export default Register;
