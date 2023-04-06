import '@fontsource/roboto/500.css';

import { BellIcon } from '@chakra-ui/icons';
import { Box, Container, Drawer, DrawerContent, useColorModeValue, useDisclosure } from '@chakra-ui/react';
import { Bell, CaretDown, Layout, List } from 'phosphor-react';
import React, { ReactNode, ReactText } from 'react';

import AboutPage from '../../pages/AboutPage';
import Footer from '../footer/Footer';
import HomComponent from '../homComponent/HomComponent';
import Logo from '../logo/Logo';
import Logo2 from '../logo/Logo2';
import MobileNav from './MobileNav';
import SidebarContent from './SidebarContent';





export default function SidebarWithHeader({ children,}: {children: ReactNode;}) {
  
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
    <Box>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: 'none', md: 'block' }}/>
        
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full">
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav onOpen={onOpen} />
        
       <AboutPage />
       {/* <HomComponent/> <Services/>
      <Portfolio/>
      <Skills/>
      <Contact/> */}
     
        {/* <Box ml={{ base: 0, md: 60 }} p="4">
        {children}
      </Box>   */}
    
    </Box>
    <Footer/>
    </>
  );
}



