import { Grid } from "@mui/material";
import Footer from "../../components/Footer/Footer";
import Hero from "../../components/Hero/Hero";

const Homepage = () => {
  return (
    <div>
      <Grid
        container
        spacing={5}
        display="flex"
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: "98vh" }}
      >
        <Hero/>
      </Grid>
      <Footer />
    </div>
  );
};
export default Homepage;
