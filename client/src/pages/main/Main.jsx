import React from 'react';
import { Box, Typography } from '@mui/material';
import MainImage from '../../assets/image/fondo.jpg';
import NavBar from '../../components/NavBar/NavBar'

const Main = () => {
  return (
    <Box>
        <NavBar />
      <Typography align='center' variant='h3' sx={{ fontWeight:'700'}}>
        TIP TRAVEL
      </Typography>
      <Typography align='center' variant='body2' sx={{ fontWeight: 100, fontFamily: 'Righteous' }}>
        Red de viajes
        </Typography>
        <Box sx={{
          backgroundImage: `url(${MainImage})`,
          backgroundRepeat: 'no-repeat',
          backgroundColor: 'black',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          height: 800,
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
        }}
        >
          <Box sx= {{width: {xs:'100%', sm:'50%', md: '40%'}, padding: {xs:3, sm:2, md:20}}}>

          <Box sx={{background: 'white', opacity:'0.8', fontFamily: 'Righteous'}}>
            <Typography variant={'h6'} color= 'red' align='center' pt={8}>
              VIAJAR POR PLACER
            </Typography>
            <Typography variant= 'h4' align='center'>
              sin preocupaciones
            </Typography>
            <Typography variant= 'body1' align='center' pb={8}>
              blablabalbalblabla
            </Typography>
          </Box>
          </Box>
        </Box>
        </Box>
        
  )
}

export default Main;
