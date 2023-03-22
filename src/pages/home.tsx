import {Box} from "@chakra-ui/react";
import Footer from"../components/footer/Footer"
import SidebarWithHeader from '../components/sidebarWithHeader/SidebarWithHeader';

export default function Home() {
  return (
    <Box as="main" margin="0" padding="0" bg={"gray.100"} overflowY={"hidden"} overflowX={"hidden"} >
         <SidebarWithHeader />

   
      <Footer />
    </Box>
  );
}
