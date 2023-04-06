import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Image,
  keyframes,
  Stack,
  Text
} from '@chakra-ui/react';
import { ArrowCircleDown, Download } from 'phosphor-react';

import Footer from '../footer/Footer';

export default function homComponent() {


  const pulseRing = keyframes`
	0% {
    transform: scale(2.33);
  }
  40%,
  50% {
    opacity: 100;
  }
  100% {
    opacity: 0;
  }
	`;

  return ( 
  <>
  
  <Flex bg={"gray.800"}  minH={'100vh'}  direction={{ base: 'column', sm: 'row' }}
    overflow='hidden'>
     <Container maxW={'7xl'} px={3} ml={{base:0, md:250}} py={100}>
      
       <Stack 
        align={'center'}
        spacing={{ base: 4, md: 10 }}
        pt={{ base: 10, md: 16 }}
        direction={{ base: 'column', md: 'row' }}
        justify={'space-between'}>
          
        <Stack flex={1}>
          <Heading 
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: '1xl', sm: '2xl', lg: '3xl' }}>
            <Text
              as={'span'} color={"white"}
              position={'relative'}
              _after={{
               
                width: 'full',
                height: '30%',
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: 'red.400',
             
              }}>
             Hi, it‘s me
            </Text>
           
          </Heading>

          <Text fontSize={['xl', 'md', 'lg', '4xl']}pt={{base:4, md:10}} as={'span'} color={'red.400'}>
               Daniel Joaquim Paulino
            </Text>
            
            <Text as={'span'} pl={4} fontSize={['sm', 'md', 'lg', '3xl']} 
              bgGradient='linear(to-l, #FF0080, #FFFFFF)' 
              bgClip='text'> And I’m a  Software and Data Engineer</Text>
        </Stack>

        <Flex 
          flex={1}
          justify={'center'}
          align={'center'}
          position={'relative'} 
          w={'full'}>
        
          <Stack align={'center'}
            bgGradient='linear(to-l, #7928CA, #FF0080)'
            position={'relative'}
            height={'389px'}
            boxShadow={'2xl'} 
            w={{base:"full", md:'full', lg:380}} 
            overflow={'hidden'}  
            borderRadius={"10% 0 10% 0"} 
            py={2}
            maxW={'full'}
            _before={{
              content: "''",
              position: 'relative',
              display: 'block',
              width: '100%',
              height: '100%',
              boxSizing: 'border-box',
              marginLeft: '-100%',
              marginTop: '-100%',
              bgGradient:'linear(to-l, #FF0080, #7928CA)',
              animation: `2.25s ${pulseRing} cubic-bezier(0.455, 0.03, 0.515, 0.955) -0.4s infinite`,
            }}>
             <Image 
              borderRadius={"10% 0 10% 0"}
              alt={'Daniel Image'}
              fit={'cover'}
              align={'center'}
              w={{base:"full", md:'full', lg:369}} 
              h={384}
              maxW={'full'}
              minH={'full'}
              position="absolute"
              src={
                '/public/avatar2.png'
              }/>
          
          </Stack>
        </Flex>

      </Stack>
      <Stack align={'center'} pt={4} mr={{base:0, md:200}}> 
        
         <Text color={'gray.600'} pb={10}>
          Ready to take on new challenges in case of a job ou Freelance opportunity. I am actively looking for job in the fields of Software/Web Development and interested in Data.
          </Text>
          <Button w={300} maxW={'full'} 
              rounded={'full'}
              fontWeight={'normal'}
              px={4}
              colorScheme={'red'}
              bg={'#944CAD'}
              _hover={{ bg: 'green.800', color:'white' }}>
             <Text> Download CV </Text>
             <ArrowCircleDown color='#1A365D' size={22} />
            </Button>
        </Stack>

    </Container>
  </Flex>
  </>
  );
}

