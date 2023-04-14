import {
  Badge,
  Box,
  Button,
  Center,
  Container,
  Divider,
  Flex,
  Grid,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import Loading from "../components/Loading";
import { get_single_char } from "../redux/characters/actions";
import { BadgeStyle, BorderStyle, ButtonStyle } from "../styles";

export default function SingleCharecter() {
  let { SINGLE_CHAR } = useSelector((store) => store.charManager);
  let dispatch = useDispatch();
  let { id } = useParams();

  useEffect(() => {
    dispatch(get_single_char(id));
  }, [dispatch, id]);

  let {
    image,
    name,
    status,
    species,
    type,
    origin,
    gender,
    location,
    episode,
  } = SINGLE_CHAR;

  return (
    <Box>
      <Grid
        gridTemplateColumns={{ base: "repeat(1, 1fr)", lg: "repeat(2, 1fr)" }}
      >
        <Box {...BorderStyle} position="relative">
          <Loading>
            <Image src={image} w="100%" />
          </Loading>
          <HStack
            p="20px"
            w={"100%"}
            textAlign={"center"}
            // bgColor="teal"
            justify={"space-between"}
            position="absolute"
            bottom={0}
          >
            <Button
              {...ButtonStyle}
              as={Link}
              to={`/characters/${+id - 1}`}
              isDisabled={+id === 1}
            >
              {"<<"}
            </Button>

            <Heading fontSize={"xl"}>{name}</Heading>
            <Button
              {...ButtonStyle}
              as={Link}
              to={`/characters/${+id + 1}`}
              isDisabled={!name}
            >
              {">>"}
            </Button>
          </HStack>
        </Box>
        <Center>
          <Stack flexWrap="wrap" gap="5px" {...BorderStyle} minW="350px">
            <Text
              {...BadgeStyle}
              fontSize="30px"
              bgColor={"teal"}
              textAlign="center"
            >
              {name}
            </Text>
            <Text {...BadgeStyle}>status: {status}</Text>
            <Text {...BadgeStyle}>species: {species}</Text>
            <Text {...BadgeStyle}>type: {type || "undefined"}</Text>
            <Text {...BadgeStyle}>origin: {origin.name}</Text>
            <Text {...BadgeStyle}>gender: {gender}</Text>
            <Text
              {...BadgeStyle}
              overflowWrap="break-word"
              style={{ wordWrap: "break-word" }}
            >
              location: {location.name}
            </Text>
          </Stack>
        </Center>
      </Grid>
    </Box>
  );
}

// - Clicking on any of the card following more information of the character should be shown on the dynamic route **`/character/<character_id>`**
