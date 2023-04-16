import { Box, Container, ContainerProps, useColorModeValue } from '@chakra-ui/react';

import Footer from '../components/footerComponent/FooterComponent';

function Layout({ children, ...rest }:ContainerProps){

  return(
<>
  <Container margin="0" padding="0" left={"0"} right={"0"} maxW={'full'}  maxH="100vh" bg={useColorModeValue('gray.900', 'gray.900')} {...rest}>
      {children}
  </Container>
</>
  );
}

export default Layout