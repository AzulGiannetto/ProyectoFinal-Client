import { Button, Grid } from "@mui/material";

const ButtonHome = () => {
  return (
    <div>
      <Grid spacing={2} p={5}>
        <Button
          style={{
            width: "150px",
            backgroundColor: "#0fb66e",
            color: "#000000",
          }}
        >
          Log In
        </Button>
        <Button
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
