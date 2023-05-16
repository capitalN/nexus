import { Box } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";

function App() {
  return (
    <Box>
      <Navbar/>
      <Home/>
      <Footer/>
    </Box>
  );
}

export default App;
