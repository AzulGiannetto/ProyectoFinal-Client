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
          ¡Muchas gracias por elegirnos! Esperamos que mediante nuestro servicio puedas imaginar tus 
          nuevos viajes a de los paisajes que nuestros usuarios suben a nuestra red social. Consideramos 
          que viajar no solo nos aporta los mejores momentos, sino que nos ayuda a conocernos a nosotros 
          mismos y nuevas culturas, así como las maravillas de la naturaleza. 
          Recorda que es de utilidad que no solo disfrutes los contenidos de otros usuarios, 
          sino que subas los tuyos en los distintos paisajes para incentivar a los demás a conocer nuestro planeta. 
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
