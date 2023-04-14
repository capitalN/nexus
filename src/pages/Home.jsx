import { Box, Button, ButtonGroup, Center, Image } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { ButtonStyle } from "../styles";

export default function Home() {
  return (
    <Center
      bgImage={{
        base: "https://w0.peakpx.com/wallpaper/42/919/HD-wallpaper-epic-rick-morty-dibujo-diseno-morty-rick-and-morty-cool-rick-yanrc18-arte-animado.jpg",
        // md: "https://e1.pxfuel.com/desktop-wallpaper/896/693/desktop-wallpaper-rick-and-morty-psychedelic-rick-and-morty-drip-thumbnail.jpg",
        lg: "https://wallpaperaccess.com/full/238256.jpg",
      }}
      bgSize="cover"
      bgRepeat={"no-repeat"}
      w="100vw"
      h={"100vh"}
      bgPosition="center"
    >
      <ButtonGroup position="absolute" bottom={"20px"} gap="10px">
        <Button {...ButtonStyle} colorScheme="red" as={Link} to="/characters">
          show characters
        </Button>
      </ButtonGroup>
    </Center>
  );
}
