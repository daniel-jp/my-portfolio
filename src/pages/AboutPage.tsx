import {
  Box,
  Flex,
  Heading,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
  SimpleGrid,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Stack,
  Text,
} from '@chakra-ui/react';
import { CalendarCheck } from 'phosphor-react';

import AboutProp from '../AboutProp/AboutProp';
import AboutComponent from '../components/aboutComponent/AboutComponent';

function AboutPage(){
  const aboutProp = AboutProp();
  return(
    <>
    <Flex bg={"gray.800"} pr={{base:'0', md:'250'}} 
    py={140} justify={'center'} 
    display={'block'} minH={'100vh'}  
    direction={{ base: 'column', sm: 'row' }}
    overflow='hidden'  w={"full"}  >
    <Stack  w={"full"} px={3} ml={{base:0, md:250}} pb={10} textAlign={"start"}>
    <Heading  fontSize={['md', 'lg', '3xl']} bgGradient='linear(to-l, #8222AF,#9B19D9, #9B19D9, #386283)' 
    bgClip='text'>About, me</Heading>

      <Heading textAlign={{base:"center", md:"center",lg:"start"}} pl={10} pr={10} 
      fontSize={['md', 'lg','3xl']} pt={5} color={'#D16847'}>Software and Data Engineer</Heading>
      <Text pl={2} textAlign={{base:"center", md:"center",lg:"start"}}  color={'#A0AEC0'} fontSize={['sm', 'md','18']}>
        I'm Daniel Paulino, of Angolan nationality, I live in Morocco for academic training reasons..
      </Text>
    </Stack>
    <Box>
      <SimpleGrid columns={{ base: 1, md:3}} spacing={{ base: 2, md: 3 }}>
        {
          aboutProp.map(( aboutprops, key ) => (
            <AboutComponent  key={aboutprops.id} 
            title={aboutprops.title} 
            text={aboutprops.text} 
            icon={aboutprops.icon} 
            />
          ))
        }
        
       </SimpleGrid>
      </Box>
      
    <Box pl={4}  pr={5}  my={20} position={"sticky"} ml={{base:4, md:270}} _before={{
      content:'" "',
      position:'absolute',
      width:'2px',
      height:'100%',
      left:"0", 
      top:"0px",
      border:"1px solid #944CAD",
      backgroundColor:'#944CAD',
      }}  w={"full"}>
                   
      <Box left={-2} position={"absolute"} w={5} h={5} borderRadius={"50%"} bg={"red.500"}></Box>
      <Stack rounded={4}  boxShadow='dark-lg' py={2}  marginBottom={"0"}
          maxH={"full"} display={'flex'} mr={{base:0, md:10}} >
          <Box px={2}> 
          <SimpleGrid columns={{ base: 1, md:1}}   color={"#944CAD"}>
            <Box display={'flex'}><CalendarCheck size={22} color={"#F56565"}/><Text pl={2} color={"#F56565"}>2017-2019</Text></Box>
         
          <Box><Text fontSize={['xl','2xl']}  bgGradient='linear(to-l, #8222AF,#9B19D9, #9B19D9, #386283)'
           bgClip='text' fontWeight={'bold'} textAlign={{base:"justify", md:"justify",lg:"start"}}  >Master’s in Software and Data Engineering</Text></Box>
          <Box><Text textAlign={{base:"justify", md:"justify",lg:"start"}} color={"gray.300"}>Right after I finished my degree in Morocco, I joined the Masters in Data Engineering and Software Development at Mohamed V University, Faculty of Sciences.</Text></Box> 
          </SimpleGrid> 
          </Box>
    </Stack>
    <Stack  rounded={4} mr={{base:0, md:10}} boxShadow='dark-lg' py={2}   marginBottom={"0"} pt={5} maxH={"full"} display={'flex'}>
    <Box left={-2} position={"absolute"} w={5} h={5} borderRadius={"50%"} bg={"red.500"}></Box>
          <Box px={2}> 
            <SimpleGrid columns={{ base: 1, md:1}}   color={"#944CAD"}>
            <Box display={'flex'}><CalendarCheck size={22} color={"#F56565"}/><Text pl={2} color={"#F56565"}>2017-2019</Text></Box>
         
          <Box><Text fontSize={['xl','2xl']}  bgGradient='linear(to-l, #8222AF,#9B19D9, #9B19D9, #386283)' 
          bgClip='text' fontWeight={'bold'} textAlign={{base:"justify", md:"justify",lg:"start"}} >Degree in Software and Web Developer</Text></Box>
          <Box><Text textAlign={{base:"justify", md:"justify",lg:"start"}} color={"gray.300"}>I graduated in software at ABDELMALEK ESSAADI university, Higher School of Tetouan-Morocco.</Text></Box> 
          </SimpleGrid> 
          </Box>
    </Stack>
    <Stack  rounded={4}  mr={{base:0, md:10}} boxShadow='dark-lg' py={2}  marginBottom={"0"} pt={5} maxH={"full"}  display={'flex'}>
    <Box left={-2} position={"absolute"} w={5} h={5} borderRadius={"50%"} bg={"red.500"}></Box>
        
          <Box px={2}> 
          <SimpleGrid columns={{ base: 1, md:1}}   color={"#944CAD"}>
            <Box display={'flex'}><CalendarCheck size={22} color={"#F56565"}/><Text pl={2} color={"#F56565"}>2017-2019</Text></Box>
         
          <Box w={"full"}>
            <Text fontSize={['xl','2xl']}  bgGradient='linear(to-l, #8222AF,#9B19D9, #9B19D9, #386283)' 
            bgClip='text' fontWeight={'bold'} textAlign={{base:"justify", md:"justify",lg:"start"}} >Bachelor's Degree in IT Technician</Text>
            </Box>
          <Box><Text textAlign={{base:"justify", md:"justify",lg:"start"}}  color={"gray.300"}>Professional bachelor Technician Specialized in Computer Science.</Text></Box> 
          </SimpleGrid> 
          </Box>
         
     </Stack>
       <Box left={-2} position={"absolute"} w={5} h={5} borderRadius={"50%"} bg={"red.500"}></Box>
     </Box>

    </Flex>
    </>
  )
}
export default AboutPage