import icon from '@chakra-ui/icon/dist/icon';
import {
  Box,
  Flex,
  Stack,useColorModeValue,
  StatLabel,Image,
  FormLabel,
} from '@chakra-ui/react';
import React, { useState } from 'react';


function SkillsComponent2({language,text,img}:any){

  return(
   <>
      <Stack py={'5'} 
      shadow={'xl'} bg={"gray.700"}  w={"full"} 
      border={'1px solid'}
      borderColor={useColorModeValue('gray.800', 'gray.500')}
      rounded={'lg'}>
     <Flex justifyContent={'space-between'} p={4} mr={2} color={"gray.400"}>
        <Box pl={{ base: 2, md: 2 }}>
          <FormLabel fontWeight={'medium'} color={"orange.400"} isTruncated>
            {language}
          </FormLabel>
          <FormLabel fontSize={["sm","md","2xl"]} fontWeight={'medium'}>
            {text}
          </FormLabel>
        </Box>
        <Box 
          my={'auto'} p={2} bg={"gray.900"}  rounded={6}
          color={useColorModeValue('gray.200', 'gray.200')}
          alignContent={'center'} >
      <Image width={14} height={14} rounded={6}  src={`/public/assets/langLogos/${img}`} />
        </Box>
      </Flex>
      </Stack>
             
   </>
  )
}
export default SkillsComponent2
