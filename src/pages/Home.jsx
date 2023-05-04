import {
  Box,
  Button,
  ButtonGroup,
  Center,
  Heading,
  Image,
  Stack,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { ButtonStyle } from "../styles";

export default function Home() {
  return (
    <Center
      bgImage={{
        base: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ6LjRl97iF0HH-IzAoScbHURhxr6W4lWqosB5J1Xd9FMS7PRwf",
        // md: "https://e1.pxfuel.com/desktop-wallpaper/896/693/desktop-wallpaper-rick-and-morty-psychedelic-rick-and-morty-drip-thumbnail.jpg",
        lg: "https://wallpaperaccess.com/full/238256.jpg",
      }}
      bgSize="cover"
      bgRepeat={"no-repeat"}
      w="100vw"
      h={"100vh"}
      bgPosition="center"
    >
      <Stack position="absolute" top={"40%"} left="25%">
        <Button {...ButtonStyle} colorScheme="red" as={Link} to="/characters">
          show characters
        </Button>
      </Stack>
    </Center>
  );
}
