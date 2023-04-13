import { Box, Container, Flex, Heading, SimpleGrid, Stack, Text } from '@chakra-ui/react';

import ServiceComponent from '../components/servicesComponent/ServicesComponent';
import ServiceProps from '../serviceProp/ServiceProps';

function ServicePage(){
const serviceProps = ServiceProps();
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
        My services
        </Heading>
        <Text color={'gray.400'} fontSize={{ base: 'sm', sm: 'lg' }}>
        I would like to illustrate the areas where I work and the types of services I do.
        </Text>
      </Stack>
<Box>
    <SimpleGrid columns={{base:1, md:2,lg:3}} p={{base:3,md:10}} spacing={{ base: 2, md: 4 }}>
        {
          serviceProps.map((servicep, id)=>(

            <ServiceComponent 
            icon={servicep.icon} 
            title={servicep.title} 
            text={servicep.text} 
            button={servicep.button}
            id={servicep.id} />

          ))
        }

  </SimpleGrid>
  </Box>
  <Box>
   
  </Box>
</Flex></>
  )
}
export default ServicePage