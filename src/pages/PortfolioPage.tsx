import { Box, Button, Container, Flex, Heading, Hide, Link, Show, SimpleGrid, Stack, Text } from '@chakra-ui/react';

import PortfolioComponent from '../components/portfolioComponent/PortfolioComponent';
import portfolioProps from '../PortfolioProps/PortfolioProps';

function PortfolioPage(){
const portfolioprops = portfolioProps();
  return( 
    <>
    <Flex  display={"block"}
      ml={{base:0, md:240}}  justify={'center'} pb={100}
      bg={"gray.800"} 
      direction={{ base: 'column', sm: 'row' }}
      overflow='hidden'>
 

        <Stack spacing={4} as={Container} pt={100} pb={10}  maxW={'5xl'} textAlign={'center'}>
        <Heading bgGradient='linear(to-l,#944CAD, #3E91C0, #3E91C0, #3E91C0)' 
    bgClip='text'fontSize={{ base: '2xl', sm: '4xl' }}  textAlign={{base:"center", md:"end"}} fontWeight={'bold'}>
      Latestt Projects
        </Heading>
        <Text color={'gray.400'} textAlign={"center"} fontSize={{ base: 'sm', sm: 'lg' }}>
        On this page I present you my portfolio with projects carried out and those that 
        are in the process of being carried out        </Text>
      </Stack>
    <Box>
    <SimpleGrid columns={{base:1, md:2,lg:3}} p={3} spacing={{ base: 4, md: 4 }}>
        {
          portfolioprops.map(( portfoliop, id) => (

            <PortfolioComponent 
            imgc={portfoliop.imgc}
            titlec={portfoliop.titlec} 
            textc={portfoliop.textc} 
            iconc={portfoliop.iconc} 
            key={id} /> 

          ))
        }

  </SimpleGrid>
    </Box>

    <Flex mt={30} ml={{base:0, md:240}} align={"center"} justify={"center"} >

      <Link as={"a"} textAlign={"center"}  bg={"red.300"} w={"200px"} maxW={"full"} rounded={4}  _hover={{
        bg:"#944CAD"}}>

        <Text color={"gray.900"}  py={1}   px={8}  fontSize={['md','2xl','2xl']} fontWeight={"600"}> Learn more </Text>
      </Link>

    </Flex>
 
</Flex></>
  )
}
export default PortfolioPage