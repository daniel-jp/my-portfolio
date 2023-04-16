import icon from '@chakra-ui/icon/dist/icon';
import { Box, Flex, FormLabel, Image, Stack, StatLabel, useColorModeValue } from '@chakra-ui/react';
import React, { useState } from 'react';


function SkillsComponent2({language,text,img}:any){

  return(
   <>
      <Stack py={'5'} 
      shadow={'xl'} bg={"gray.900"}  w={"full"} 
      border={'1px solid'}
      borderColor={useColorModeValue('gray.800', 'gray.500')}
      rounded={'lg'}>
     <Flex justifyContent={'space-between'}  align={'center'}  p={4} mr={2} color={"gray.400"}>
        <Box pl={{ base: 2, md: 2 }}>
          <FormLabel fontWeight={'medium'} color={"orange.400"} isTruncated>
            {language}
          </FormLabel>
          <FormLabel fontSize={["sm","md","2xl"]} fontWeight={'medium'}>
            {text} 
          </FormLabel>
        </Box> 
        <Flex align={"center"}
              w={"60px"} h={"60px"} 
              p={1} bg={"gray.700"}  rounded={6}
              color={useColorModeValue('gray.200', 'gray.200')}>
      <Image rounded={6}  src={`/public/assets/langLogos/${img}`} />
        </Flex>
      </Flex>
      </Stack>
             
   </>
  )
}
export default SkillsComponent2
