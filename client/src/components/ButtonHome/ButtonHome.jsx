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
            backgroundColor: "#0fb66e",
            color: "#000000",
          }}
          onClick={handleClickLogIn}
        >
          Log In
        </Button>
        <Button
          onClick={handleRegister}
          style={{
            width: "150px",
            backgroundColor: "#02a663",
            color: "#000000",
          }}
        >
          Register
        </Button>
      </Grid>
    </div>
  );
};
export default ButtonHome;
