import { Button, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";


const ButtonHome = () => {
  const navigate= useNavigate()

  const handleClickLogIn = () => {
    navigate("/login")
  }
  const handleRegister = () => {
    navigate("/register")
  }
  return (
    <div>
      <Grid spacing={2} p={5}>
        <Button
          style={{
            width: "150px",
            backgroundColor: "#006064",
            color: "#ffffff",
          }}
          onClick={handleClickLogIn}
        >
          Log In
        </Button>
        <Button
          onClick={handleRegister}
          style={{
            width: "150px",
            backgroundColor: "#004D40",
            color: "#ffffff",
          }}
        >
          Register
        </Button>
      </Grid>
    </div>
  );
};
export default ButtonHome;
