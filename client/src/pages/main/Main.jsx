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
          <Box sx= {{width: {xs:'100%', sm:'50%', md: '40%'}, padding: {xs:3, sm:2, md:20}}}>

          <Box sx={{background: 'white', opacity:'0.7', fontFamily: 'Righteous'}}>
            <Typography variant={'h4'} color= '#558b2f' align='center' pt={8}>
              VIAJAR POR PLACER
            </Typography>
            <Typography variant= 'h5' align='center'>
              Sin preocupaciones
            </Typography>
            <Typography variant= 'body2' align='center' pb={8}>
              Vea aqui los mejores lugares del mundo compartido por nuestros usuarios
            </Typography>
          </Box>
          </Box>
        </Box>
        </Box>
        
  )
}

export default Main;
