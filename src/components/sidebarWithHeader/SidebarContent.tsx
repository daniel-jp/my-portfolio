import { Box, BoxProps, Flex, IconButton, useColorModeValue } from '@chakra-ui/react';
import { XCircle } from 'phosphor-react';
import * as React from 'react';

import NavItem from './NavItem';
import Logo from '../Logo';


 

 const LinkItems = [
   { id:1, name: 'Home',},
   { id:2, name: 'About'},
   { id:3, name: 'Services'},
   { id:4, name: 'Portfolio' },
   { id:5, name: 'Skills'},
   { id:6, name: 'Contact'},
 ];

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

function SidebarContent ({ onClose, ...rest }: SidebarProps)  {
  return (
    <>
    <Box justifyContent="space-between" 
      transition="3s ease" 
      bg={useColorModeValue('gray.900', 'gray.100')}
      borderRight="1px" color={"white"} 
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      zIndex={2000}
      h="full" fontFamily={"'Roboto', sans-serif"}
      {...rest}>
      <Flex mt={6} mb={50} fontFamily={"'Roboto', sans-serif"} px={6} align={'center'} justifyContent="space-between">
                <Logo/>
       <IconButton
       borderRadius={'50%'}
       bg={"gray.900"}
  
       display={{ base: 'flex', md: 'none' }} 
       onClick={onClose} 
            icon={<XCircle color='#AD4C98' size={32}  />} aria-label={'close'}/>
      </Flex>

      {LinkItems.map((link) => (
        <NavItem key={link.id} name= {link.name}/> 
      ))}
    </Box>
    </>
  );
};

export default SidebarContent