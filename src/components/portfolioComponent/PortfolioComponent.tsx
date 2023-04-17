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
<Flex w={"full"} maxW={"7xl"}  align={"center"}
    position="relative" 
    bgPosition="center" backgroundRepeat="no-repeat" visibility={'visible'}
    backgroundSize="cover" rounded={6}
    bgImage={`url(${imgc})`} _hover={{
      opacity:'1.0',
      padding: "0px",visibility:'visible',
      zIndex:"1",}} height={190} justifyContent={"center"}> 

 {/* */}
   <Card  opacity='0.7'   w={"full"} h={"full"}
     bg={"blackAlpha.900"}
       zIndex={-1}
      align={"center"}>
          
    <CardHeader textAlign={"center"}>
      <Heading color={"#FFFFFF"} fontWeight={"bold"} fontSize={["sm","mg","lg"]} > {titlec}</Heading>
    </CardHeader>
    <CardBody mt={-8}>
      <Text textAlign={"center"} fontSize={['md','md']}  fontWeight={"bold"} color={"gray.100"} >{textc}</Text>
     
    </CardBody>
     <CardFooter mt={-8}>
        <Link shadow={"Dark-lg"} bg={"gray.700"} px={10} alignItems={"center"}
        rounded={"full"} display={"flex"}>
          <Text fontWeight={"bold"} color={"white"}> visit website</Text>
         <Icon as={iconc} fontSize={32} fontWeight={"bold"} color={"blue.50"} _hover={{
          cursor:"pointer"
         }}/></Link>
    </CardFooter>
  </Card>



</Flex>
  )
}
export default PortfolioComponent