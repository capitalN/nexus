import { Center, Flex,Hide, Heading, Stack, Text,HStack,Image } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <HStack p="20px">
      <Image src="logo.png" w="100px"/>
        <Hide below="lg"></Hide>
        <Hide above="lg"></Hide>
    </HStack>
  )
}

export function NavLinks() {
    return (
      <Flex p="20px" direction={{base:"column",lg:"row"}}>
        <Link to="#"></Link>
      </Flex>
    )
  }
