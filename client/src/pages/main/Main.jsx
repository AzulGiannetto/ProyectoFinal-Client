import React from 'react';
import { Box, Typography } from '@mui/material';
import MainImage from '../../assets/image/fondo.jpg';
import NavBar from '../../components/NavBar/NavBar'

const Main = () => {
  return (
    <Box>
        <NavBar />
        <Box sx={{
          backgroundImage: `url(${MainImage})`,
          backgroundRepeat: 'no-repeat',
          backgroundColor: 'black',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          height: 1000,
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
        }}
        >
          <Box sx= {{width: {xs:'1000px', sm:'50%', md: '50%'}, padding: {xs:3, sm:3, md:20}}}>

          <Box sx={{background: 'transparent', fontFamily: 'Righteous', fontStyle:'bold'}}>
            <Typography sx={{textShadow: "3px 0px 0px #1565C0"}}variant={'h3'} color= '#ffffff' align='center' pt={8}>
              VIAJAR POR PLACER
            </Typography>
            <Typography sx={{textShadow: "3px 0px 0px #1565C0"}} color="#ffffff" variant= 'h5' align='center'>
              Sin preocupaciones, vea aqui los mejores lugares del mundo compartido por nuestros usuarios
            </Typography>
            <Typography variant= 'body2' align='center' pb={8}>
            </Typography>
          </Box>
          </Box>
        </Box>
        </Box>
        
  )
}

export default Main;
