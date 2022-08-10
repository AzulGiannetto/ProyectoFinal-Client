import { Stack, Button, Grid } from "@mui/material";

const ButtonsLogin = () => {
  return (
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
  );
};
export default ButtonsLogin;
