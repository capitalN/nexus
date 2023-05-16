import { Center, Heading, Stack, Text } from '@chakra-ui/react'
import React from 'react'

export default function Home() {
  return (
    <Center minH={"100vh"}>
      <Stack textAlign={"center"}>
        <Heading fontSize={"150px"} fontFamily={"serif"} style={{"background": "-webkit-linear-gradient(#35c5af, #0075bc)", "-webkit-background-clip": "text", "-webkit-text-fill-color": "transparent"}}>HELLO</Heading>
        <Text maxW="500px" fontSize={"25px"}>we are <span style={{fontWeight:"bold"}}> Nexus Media </span>we help business to grow and stand out among  crowd through branding and creative marketing</Text>
      </Stack>
    </Center>
  )
}
