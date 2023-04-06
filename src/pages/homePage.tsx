import { Box, BoxProps } from '@chakra-ui/react';

import SidebarWithHeader from '../components/sidebarWithHeader/SidebarWithHeader';
import Layout from '../Layout/Layout';

export default function Home({children, ...res}:BoxProps) {
  return (
    <Box {...res} as="main" margin="0"  padding="0" bg={"gray.100"} overflowY={"hidden"} overflowX={"hidden"}>
      <SidebarWithHeader children={children}/>
    </Box>
  );
}
