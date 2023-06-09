import {
  Avatar,
  Box,
  Flex,
  FlexProps,
  HStack,
  IconButton,
  Image,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Stack,
  Text,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react';
import { Bell, DotsThreeVertical, Gear, Globe, List, Power, UserCircleGear } from 'phosphor-react';
import * as React from 'react';

import Layout from '../../Layout/Layout';
import Logo2 from '../Logo2';
import Logo from '../Logo';

interface MobileProps extends FlexProps {
  onOpen: () => void;
}
function MobileNav ({ onOpen, ...rest }: MobileProps)  {

  return (
    <>
  
    <Flex 
      position={"fixed"}
      transition={"ease-in-out"}
      transitionDuration={"200s"}
      top={0}
      left={0} 
      right={0}
      zIndex={10}
    
      px={{ base: 4, md: 4 }} 
      height="14"
      alignItems="center"
      bg={useColorModeValue( 'gray.900', 'white')}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue('white', 'gray.700')}
      justifyContent={{ base: 'space-between', md: 'flex-end' }}
      {...rest}>
      <IconButton 
        display={{ base: 'flex', md: 'none' }}
        onClick={onOpen}
        variant="outline"
        color={'white'}
        aria-label="open menu"
        icon={<List color='#FFFFFF' size={22} />}/>

      <Text
        display={{ base: "flex", md: "none" }}
        fontSize="2xl"
        fontFamily="monospace"
        fontWeight="bold">
           <Logo />
      </Text>

      <HStack spacing={{ base: '0', md: '6' }}>
         <Stack p={1} color="white"  borderRadius={"50%"}  _hover={{cursor:"pointer", bg:"gray.600",}}>
           <Image borderRadius={"50%"} h="22px"  w="22px" src={"/assets/logos/sett.gif"}/>                  
        </Stack>
        
        <Flex alignItems={'center'}>
          <Menu>
            <MenuButton 
              transition="all 0.3s"
              _focus={{ boxShadow: 'none'}}>
              <HStack>
                 <Stack p={1} bg="gray.600"
                   color="white" borderRadius={"50%"}  
                 _hover={{cursor:"pointer", bg:"gray.600",}} 
                     display={{ base: 'none', md: 'flex' }}>
                  <Globe color='white' size={22} />
                </Stack>
              </HStack>
            </MenuButton>

            <MenuList
              bg={useColorModeValue('gray.700', 'gray.900')}
              borderColor={useColorModeValue('gray.800', 'gray.700')}>
              <MenuItem  justifyContent={'space-between'} color={'orange.500'} 
              bg={useColorModeValue('gray.700', 'gray.900')}  _hover={{ bg:"gray.600"}}> 
              <Text as={'span'}>Portuguese</Text> <UserCircleGear size={22} /></MenuItem>

              <MenuItem color={'orange.400'} justifyContent={'space-between'}  _hover={{ bg:"gray.600"}}
               bg={useColorModeValue('gray.700', 'gray.900')}><Text as={'span'}>English</Text> </MenuItem>
              <MenuItem color={'orange.400'} justifyContent={'space-between'}
               bg={useColorModeValue('gray.700', 'gray.900')} 
               _hover={{ bg:"gray.600"}}><Text as={'span'}>French</Text></MenuItem>
              <MenuDivider />
            </MenuList>
          </Menu>
          
        </Flex>
      </HStack>
     
    </Flex> 
    </>
  );
};

export default MobileNav