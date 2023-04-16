import { Box, chakra, Container, Stack, Text, useColorModeValue, VisuallyHidden } from '@chakra-ui/react';
import { InstagramLogo, LinkedinLogo, TwitterLogo } from 'phosphor-react';
import { ReactNode } from 'react';

import Logo2 from '../Logo2';


const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function SmallWithLogoLeft() {
  return (
    <Box h={'full'}  ml={{base:0, md:240}} 
      bg={useColorModeValue('gray.900', 'gray.900')}
      color={useColorModeValue('gray.500', 'gray.200')}>
         {/* position={'abusolute'} */}
      <Container
        as={Stack}
        maxW={'full'}
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}>
        <Logo2/>
        <Text textAlign={"center"}> Copyright © 2023 Portfolio webSite. All rights reserved | Code Vite-react TS & Chakra-ui </Text>
        <Stack direction={'row'} spacing={6}>
          <SocialButton label={'Twitter'} href={'#'}>
          <TwitterLogo color={"#9A4CAD"} size={32} />          
          </SocialButton>
          <SocialButton label={'YouTube'} href={'#'}>
          <LinkedinLogo  color={"#9A4CAD"} size={32} />
          </SocialButton>
          <SocialButton  label={'Instagram'} href={'#'}>
          <InstagramLogo color={"#9A4CAD"} size={32} />
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  );
}
