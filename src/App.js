import { Box, Stack } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Work from "./pages/Work";
import Projects from "./pages/Projects";
import Clients from "./pages/Clients";
import Team from "./pages/Team";

function App() {
  return (
    <Stack gap="40px">
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
      <Box id="clients">
        <Clients/>
      </Box>
      <Box id="team">
        <Team/>
      </Box>
      <Footer/>
    </Stack>
  );
}

export default App;
