import { Grid, Box, Paper } from "@mui/material";
import Footer from "../../components/Footer/Footer";
import Hero from "../../components/Hero/Hero";
import { Typography } from "@mui/material";
import styles from "./stylesHomepage";
import ButtonHome from "../../components/ButtonHome/ButtonHome";
import NavBar from "../../components/NavBar/NavBar"

const Homepage = () => {
  return (
    <div>
      <NavBar/>
      <Grid
        container
        spacing={5}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: "98vh" }}
      >
        <Hero />

        <Grid item xs={2}>
          <Typography align="center" sx={styles.typography}>
            Nuestra Misión
          </Typography>
          <Typography align="center" sx={styles.typographyText}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam in,
            atque et veniam molestiae quaerat aliquid sed ipsam voluptas
            explicabo cum. Dolorem, ad enim corporis eos tempore illo accusamus
            eum ipsa qui repudiandae dolore nostrum doloremque magnam quos a
            corrupti amet possimus! Veritatis in repudiandae quos quam fugiat
            distinctio debitis maxime impedit soluta quis modi esse, est eius
            ipsam inventore dicta. Tempora maxime deleniti ullam voluptatibus
            unde corrupti incidunt recusandae accusantium quaerat enim aliquid
            saepe placeat officia illum, laborum tempore?
          </Typography>
        </Grid>
          <Grid item xs={3}>
            <ButtonHome />
          </Grid>
      </Grid>
      <Footer />
    </div>
  );
};
export default Homepage;
