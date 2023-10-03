import { Box, Typography, Button } from '@mui/material'
import bannerImage from '../assets/images/banner.png'


const HeroBanner = () => {
  return (
    <Box sx={{
      mt: { lg: '212px', xm: '70px' },
      ml: { sm: '50px' }
    }} position='relative' p='20px'>

      <Typography color='#FF2625'
        fontWeight='600' fontSize='26px' >
        Fitness Club
      </Typography>

      <Typography fontWeight={700} mb='23px' mt='30px'
        sx={{fontSize: {lg:'44px', xs:'40px'}}} >
        Sweat, Smile <br /> and Repeat
      </Typography>
      
      <Typography fontSize='22px' lineHeight='35px' mb={4}>
        Check out the most effective excersices
      </Typography>

      <Button variant='contained'
        color='error'
        sx={{ backgroundColor: '#FF2625', padding: '10px'}}
        href='#exercises' >Explore Exercises</Button>

      <Typography fontWeight={600} color='#FF2625' fontSize='200px' sx={{
        opacity: 0.1, 
        display: {lg:'block', xs: 'none'}
      }}>
        Excercise
      </Typography>

      <img src={bannerImage} alt="newbanner" className='hero-banner-img'/>

    </Box>
  )
}

export default HeroBanner