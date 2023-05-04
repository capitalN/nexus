import {
  Box,
  Button,
  Grid,
  Heading,
  HStack,
  Image,
  Input,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { BorderStyle, ButtonStyle } from "../styles";

export default function Navbar() {
  return (
    <Grid
      gridTemplateColumns={{ base: "repeat(2,1fr)" }}
      alignItems={"center"}
      bgColor="teal"
      p={"10px"}
      color="teal"
      gap={"5px"}
      w="100%"
      {...BorderStyle}
    >
      <Box as={Link} to="/" w="80px">
        <Image
          alt="logo"
          src="https://vsthemes.org/uploads/nova/760430-1/5fa/2555fada696b3479387805ed54f711b6.webp"
        />
      </Box>
      <Button
        {...ButtonStyle}
        as={Link}
        to="/characters"
        justifySelf={"right"}
        colorScheme="red"
      >
        CHARACTERS
      </Button>
    </Grid>
  );
}

{
  /* <Image src="https://rickandmortyshop.com/wp-content/uploads/2021/04/rick-and-morty-shop-logo-1-1.png" /> */
}
