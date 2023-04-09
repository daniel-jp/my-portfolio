import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Container,
  Flex,
  Heading,
  Hide,
  Icon,
  Link,
  Show,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

function PortfolioComponent({iconc, titlec,textc, imgc}:any){


  return( 
<Box w={"full"} maxW={"7xl"} 
    position="relative" 
    bgPosition="center" backgroundRepeat="no-repeat" visibility={'visible'}
    backgroundSize="cover" h={199} 
    bgImage={`url(${imgc})`} _hover={{
      opacity:'0.8',
      padding: "6px",visibility:'visible',
      zIndex:"1",}}> 


   <Card  opacity='0.8'   mb={2}
      bgGradient={"linear(to-l,#7928CA, #FF0080, #171923, #1A202C, #2D3748)"}
       zIndex={-1}
      align={"center"} pt={4} px={4} h={199} w='100%' maxH={"100%"}>
          
    <CardHeader textAlign={"center"}  >
      <Heading color={"#FFFFFF"} fontWeight={"bold"} fontSize={{ base: '1xl', sm: '2xl' }} > {titlec}</Heading>
    </CardHeader>
    <CardBody mt={-8}>
      <Text textAlign={"center"} fontSize={['sm','md',"lg"]}  fontWeight={"500"} color={"#FFFFFF"} >{textc}</Text>
      
    </CardBody>
    <CardFooter pt={-4} >
      <Link>
         <Icon as={iconc} fontSize={42} fontWeight={"500"} color={"#FC8181"} _hover={{
          cursor:"pointer"
         }}/></Link>
    </CardFooter>
  </Card>



</Box>
  )
}
export default PortfolioComponent