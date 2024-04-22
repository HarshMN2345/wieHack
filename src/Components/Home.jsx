import React from 'react'
import image from '../assets/images/hero7.png'
import { Link } from 'react-router-dom';
import { Box, Stack, Typography } from '@mui/material';
import Search from './Search';
import Exercises from './Exercises';
import FitnessForm from './FitnessForm';
import Footer from './Footer';

const Home = () => {
  return (
    <div>
        <Stack direction="row" justifyContent="space-around" sx={{ gap: { sm: '123px', xs: '40px' }, mt: { sm: '32px', xs: '20px' }, justifyContent: 'none' }} px="20px">
    <Link to="/">
      <img src='https://e7.pngegg.com/pngimages/213/838/png-clipart-orange-sun-logo-sunrise-sun-logo-s-text-orange.png' alt="logo" style={{ width: '88px', height: '48px', margin: '0px 20px' }} />
    </Link>
    <Stack
      direction="row"
      gap="40px"
      fontFamily="Alegreya"
      fontSize="24px"
      alignItems="flex-end"
    >
      <Link to="/" style={{ textDecoration: 'none', color: '#3A1212', borderBottom: '3px solid #FF2625' }}>Home</Link>
      <a href="#exercises" style={{ textDecoration: 'none', color: '#3A1212' }}>Exercises</a>
    </Stack>
  </Stack>
         <Box sx={{ mt: { lg: '212px', xs: '70px' }, ml: { sm: '50px' } }} position="relative" p="20px">
    <Typography color="#FF2625" fontWeight="600" fontSize="26px">FLEX BOT</Typography>
    <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '40px' } }} mb="23px" mt="30px">
    Unlock Your Fitness Potential<br />
    with AI-Powered Training 
    </Typography>
    <Typography fontSize="22px" fontFamily="Alegreya" lineHeight="35px">
    AI Fitness Coaching Tailored Just for You
    </Typography>
    <Stack>
      <a href="#exercises" style={{ marginTop: '45px', textDecoration: 'none', width: '200px', textAlign: 'center', background: '#FF2625', padding: '14px', fontSize: '22px', textTransform: 'none', color: 'white', borderRadius: '4px' }}>Start Now</a>
    </Stack>
    <Typography fontWeight={600} color="#FF2625" sx={{ opacity: '0.1', display: { lg: 'block', xs: 'none' }, fontSize: '200px' }}>
      Exercise
    </Typography>
    <img src='https://imgs.search.brave.com/5KB8HSqVEr8ztX9wv2w58ryvrljD575JzLPGBEOOMxQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zdG9y/aWVzLmZyZWVwaWts/YWJzLmNvbS9zdG9y/YWdlLzEzMzU0L3Bl/cnNvbmFsLXRyYWlu/ZXIuc3Zn.svg' alt="hero-banner" className="hero-banner-img" />
  </Box>
  <Search/>
      <Exercises/>
      <FitnessForm/>
      <Footer/>
    </div>
  )
}

export default Home