import { Box } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Charecters from "./pages/Charecters";
import SingleCharecter from "./pages/SingleCharecter";
import "./App.css";
import Home from "./pages/Home";

function App() {
  return (
    <Box className="App" minH={"100vh"}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/characters"
          element={
            <>
              <Navbar />
              <Charecters />
            </>
          }
        />
        <Route
          path="/characters/:id"
          element={
            <>
              <Navbar />
              <SingleCharecter />
            </>
          }
        />
      </Routes>
    </Box>
  );
}

export default App;
