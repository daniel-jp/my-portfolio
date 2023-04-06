import { Flex, FlexProps, Link } from '@chakra-ui/react';
import { ReactText } from 'react';
import * as React from 'react';

interface NavItemProps extends FlexProps {
 
  children: ReactText;
}
 function NavItem  ({  children, ...rest }: NavItemProps) {

  return (
  
    <Link href="#" style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }}>
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          color: 'white',
        }} {...rest}>
        {children}
      </Flex>
    </Link>
  );
};
export default  NavItem
