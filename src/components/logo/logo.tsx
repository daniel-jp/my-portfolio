import { Box, Image } from '@chakra-ui/react';
import React from 'react';

const Logo = () => {
  return (
    <Box w={70} h={70} >
      <Image borderRadius={'50px'} src='/public/logos/logoAVG.svg' />
    </Box>
  )
}

export default Logo