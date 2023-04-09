import { Box, Container, ContainerProps, useColorModeValue } from '@chakra-ui/react';

import Footer from '../components/footerComponent/FooterComponent';

function Layout({ children, ...rest }:ContainerProps){

  return(
<Box>
  <Container margin="0" maxW={'full'} padding="0" minH="100vh" bg={useColorModeValue('gray.900', 'gray.900')} {...rest}>
      {children}
  </Container>
</Box>
  );
}

export default Layout