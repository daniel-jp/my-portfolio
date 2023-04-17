import '@fontsource/roboto/500.css';

import { Box, Drawer, DrawerContent, Flex, Link, useDisclosure } from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import AboutPage from '../../pages/AboutPage';
import ContactPage from '../../pages/ContactPage';
import PortfolioPage from '../../pages/PortfolioPage';
import SkillPage from '../../pages/SkillPage';
import MobileNav from './MobileNav';
import SidebarContent from './SidebarContent';
import HomComponent from '../homComponent/HomComponent';
import ServicePage from '../../pages/ServicePage';





export default function SidebarWithHeader() {
  
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
     <Box>
    
          <Router>
            <Routes>
             <Route   path="/home" element={<HomComponent/>} />
              <Route  path="/about" element={<AboutPage />} /> 
              <Route  path="/service" element={<ServicePage />} />
              <Route  path="/portfolio" element={<PortfolioPage/>} /> 
              <Route  path="/skill" element={<SkillPage/>} />
              <Route  path="/contact" element={<ContactPage/>} /> 
            </Routes>
        </Router> 
      </Box>
      
   
{/*      
        <Box ml={{ base: 0, md: 60 }} p="4">
        {children}
      </Box>   */}
    
    </Box>
   
    </>
  );
}



