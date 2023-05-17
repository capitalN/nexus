import { Box } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Work from "./pages/Work";

function App() {
  return (
    <Box>
      <Navbar/>
      <Home/>
      <Box id="about">
        <About/>
      </Box>
      <Box id="work">
        <Work/>
      </Box>
      <Footer/>
    </Box>
  );
}

export default App;
