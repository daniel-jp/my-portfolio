import '@fontsource/roboto/500.css';

import { BellIcon } from '@chakra-ui/icons';
import { Box, Drawer, DrawerContent, Flex, useDisclosure } from '@chakra-ui/react';
import React, { ReactNode, ReactText } from 'react';

import AboutPage from '../../pages/AboutPage';
import ContactPage from '../../pages/ContactPage';
import PortfolioPage from '../../pages/PortfolioPage';
import ServicePage from '../../pages/ServicePage';
import SkillPage from '../../pages/SkillPage';
import Footer from '../footerComponent/FooterComponent';
import MobileNav from './MobileNav';
import SidebarContent from './SidebarContent';
import HomComponent from '../homComponent/HomComponent';





export default function SidebarWithHeader({ children,}: {children: ReactNode;}) {
  
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
    <Box h={"full"} m={0}  p={0} alignContent={"center"} >
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
        <HomComponent/> 
        <AboutPage />    
        <ServicePage />
       <PortfolioPage/>
       <SkillPage/> 
       <ContactPage/>
       {/*  
   
      
      */}
{/*      
        <Box ml={{ base: 0, md: 60 }} p="4">
        {children}
      </Box>   */}
    
    </Box>
    <Footer/>
    </>
  );
}



