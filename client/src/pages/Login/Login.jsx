import * as React from "react";
import { TextField, Grid, Typography} from "@mui/material";
import Footer from "../../components/Footer/Footer"
import ButtonsLogin from "../../components/ButtonsLogin/ButtonsLogin";
import { useState } from "react";
import { useNavigate } from 'react-router-dom'


const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)
  const navigate = useNavigate()

  const handleEmail = (e) => {
    setEmail(e.target.value)
  }
  const handlePassword = (e) => {
    setPassword(e.target.value)
  }
  const handleClick =  async (e) => {
    e.preventDefault()
  }
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
            onChange = {handleEmail}
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
            onChange= {handleClick}
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
          <ButtonsLogin/>
      </Grid>
      <Footer/>
    </div>
  );
};
export default Login;
