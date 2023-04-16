import { Box, BoxProps, Flex, IconButton, Text, useColorModeValue } from '@chakra-ui/react';
import { GitBranch, GithubLogo, XCircle } from 'phosphor-react';
import * as React from 'react';
import { BsGithub } from 'react-icons/bs';

import Logo from '../Logo';
import NavItem from './NavItem';


 
interface LinkItemProps {
  name: string; 
}
const LinkItems: Array<LinkItemProps> = [
  { name: 'Home',},
  { name: 'About'},
  { name: 'Services'},
  { name: 'Portfolio' },
  { name: 'Skills'},
  { name: 'Contact'},
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
        <NavItem key={link.name} color={"gray.500"} fontSize={"lg"}>
          {link.name}
        </NavItem>
      ))}
   
    </Box>
    </>
  );
};

export default SidebarContent