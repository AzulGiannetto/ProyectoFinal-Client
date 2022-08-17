import * as React from "react";
import { TextField, Grid, Typography, Stack, Button } from "@mui/material";
import Footer from "../../components/Footer/Footer";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// import { EmailSharp } from "@mui/icons-material";
const Login = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [profilePhoto, setProfilePhoto] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleUsername = (e) => {
    setUser(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleClickSingIn = async (e) => {
    e.preventDefault();
    await axios
      .post(`http://localhost:8080/auth/login`, {
        username: user,
        password: password,
      })
      .then((res) => {
        console.log(res);
        if (res.data.status === "OK") {
          localStorage.setItem("Token", JSON.stringify(res.data.token));
          localStorage.setItem("User", JSON.stringify(user));
          localStorage.setItem("Id", JSON.stringify(res.data.id));
          navigate("/");
          setError(false);
        }
      })
      .catch((err) => {
        console.log(err);
        setError(true);
      });
  };

  const handleClickSignUp = (e) => {
    e.preventDefault();
    navigate("/register");
  };
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
        <Typography align="center" variant="h3" sx={{ color: "#00ACC1" }}>
          Login
        </Typography>
        <Grid item xs={3}>
          <TextField
            id="filled-basic"
            label="user"
            variant="filled"
            fullWidth
            value={user}
            onChange={handleUsername}
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

          <TextField
            type="password"
            label="password"
            fullWidth
            id="outlined-basic"
            variant="filled"
            value={password}
            style={{ marginBottom: "2em" }}
            onChange={handlePassword}
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
        <Stack spacing={2}>
          <Button
            onClick={handleClickSingIn}
            style={{ backgroundColor: "#006064", color: "#ffffff" }}
          >
            Sign In
          </Button>
          <Button
            onClick={handleClickSignUp}
            style={{
              width: "150px",
              backgroundColor: "#004D40",
              color: "#ffffff",
            }}
          >
            Sign Up
          </Button>
        </Stack>
      </Grid>
    </div>
  );
};
export default Login;
