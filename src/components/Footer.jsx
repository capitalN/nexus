import {
    Box,
    Button,
    ButtonGroup,
    Grid,
    Heading,
    HStack,
    Icon,
    Input,
    Link,
    Stack,
    Text,
    Textarea,
  } from "@chakra-ui/react";
  import React from "react";
  import {
    TiPhoneOutline,
    TiMail,
    TiSocialFacebook,
    TiSocialInstagram
  } from "react-icons/ti";
  
  export default function Footer() {
    return (
      <Box p="40px" color={"white"} style={{"background": "linear-gradient(0deg, rgba(53,197,175,1) 35%, rgba(0,117,188,1) 100%)"}}>
        <Grid
          gridTemplateColumns={{
            base: "repeat(1, 1fr)",
            sm: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
          }}
          gap="40px"
        >
          <Stack gap="20px" justify={"space-around"}>
            <Stack fontSize="25px">
              <Heading fontFamily={"inherit"} fontSize="100px">Nexus Media</Heading>
              <Text>nexusmedia@gmail.com</Text>
              <Text>+91 000-000-0000</Text>
              <Text>Address</Text>
              <Text>Belgaum, Karnataka</Text>
            </Stack>
  
            <ButtonGroup colorScheme={"messenger"} gap="10px">
              {SocialLinks.map(({ icon, name, href }, i) => (
                <Button
                  boxSize="50px"
                  key={i}
                  as={Link}
                  href={href}
                >
                  <Icon as={icon} boxSize={"30px"} />
                </Button>
              ))}
            </ButtonGroup>
          </Stack>
  
          <form
            action="https://formsubmit.co/angolkarnikhil@gmail.com"
            method="POST"
          >
            <Stack p="20px" fontSize="25px" bgColor="white" color="black">
            <Heading fontFamily={"inherit"} fontSize="50px">Contact</Heading>
              <Text>Name</Text>
              <Input required name="name" class="form-control" type={"text"} />
              <br />
              <Text>Email</Text>
              <Input required name="email" class="form-control" type={"email"} />
              <br />
              <Text>Message</Text>
              <Textarea class="form-control" required name="message"></Textarea>
              <br />
              <button type="submit" class="btn btn-lg btn-dark btn-block">
                <Button
                  w="100%"
                  height={"50px"}
                  colorScheme={"messenger"}
                  fontSize="25px"
                >
                  SEND
                </Button>
              </button>
            </Stack>
          </form>
        </Grid>
      </Box>
    );
  }
  
  export let SocialLinks = [
    {
      href: "mailto:@gmail.com",
      icon: TiMail,
    },
    {
      href: "tel: 00000",
      icon: TiPhoneOutline,
    },
    {
      href: "",
      icon: TiSocialFacebook,
    },
    {
      href: "",
      icon: TiSocialInstagram,
    },
  ];