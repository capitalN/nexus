import { Center, Heading, Stack, Text ,Box,Image,VStack} from '@chakra-ui/react'
import React from 'react'

export default function Home() {
  return (
    <Center minH={"100vh"}  position="relative">
      <Stack textAlign={"center"}>
        <Heading fontSize={{base:"100px", md:"150px"}} style={{"background": "-webkit-linear-gradient(#35c5af, #0075bc)", "-webkit-background-clip": "text", "-webkit-text-fill-color": "transparent"}}>HELLO</Heading>
        <Text maxW="700px" fontSize={"25px"}>we are <span style={{fontWeight:"bold"}}> Nexus Media </span>we help business to grow and stand out among  crowd through branding and creative marketing</Text>
      </Stack>
      <VStack position="absolute" bottom="20px">
        <Text fontWeight="bold">LET'S SEE HOW</Text>
        <Image w="50px" src="down.jpeg" alt="down arrow"/>
      </VStack>
    </Center>
  )
}
