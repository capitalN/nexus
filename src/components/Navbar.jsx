import { Center, Flex,Hide, Heading, Stack, Text,HStack,Image,Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <HStack p="10px 20px" position="fixed" top="0" w="100%" justify="space-between">
      <Image src="logo.png" w="100px"/>
        <Hide below="lg">
          <NavLinks/>
        </Hide>
        <Hide above="lg">=</Hide>
    </HStack>
  )
}

export function NavLinks() {
    return (
      <Flex p="20px" direction={{base:"column",lg:"row"}} align="center" gap="20px">
        <Text to="#">
          Home
        </Text>
        <Text to="#">
          About
        </Text>
        <Text to="#">
          Projects
        </Text>
        <Text to="#">
          Team
        </Text>
        <Button colorScheme={"messenger"}>CONTACT</Button>
      </Flex>
    )
  }
