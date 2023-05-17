import { Box } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Work from "./pages/Work";
import Projects from "./pages/Projects";

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
      <Box id="projects">
        <Projects/>
      </Box>
      <Footer/>
    </Box>
  );
}

export default App;
