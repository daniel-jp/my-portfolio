import { Flex, FlexProps, Link } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { NavLink as RouteLink } from 'react-router-dom';


 function NavItem  ({  name, ...rest }:any) {
  
  
  const [_activeLink, setActiveLink] = useState<string | null>(null);
  useEffect(() => {
    const currentPath = window.location.pathname;
    setActiveLink(currentPath);
  }, []);
  
  
  return (
    <Link href={name || "" }   
    style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }}
     onClick={() => setActiveLink( name || "/")} color={"gray.400"}>
      <Flex
      _activeLink={{color: "red.600"}}  
        align="center"
        p="4"
        mx="4"
        color={"gray.400"}
        borderRadius="lg"
        role="group"
        cursor="pointer" _hover={{ textDecoration: "none", color:"red.600"}}
        {...rest}>
        {name}
      </Flex>
      </Link>
   
  );
};
export default  NavItem
