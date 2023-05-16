import { Center, Flex,Hide, Heading, Stack, Text,HStack,Image,Button,  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,useDisclosure ,Show} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import React from "react";

export default function Navbar() {
  return (
    <HStack p="10px 20px" position="fixed" top="0" w="100%" justify="space-between">
      <Image src="logo.png" w="100px"/>
        <Hide below="lg">
          <NavLinks/>
        </Hide>
        <Show below="lg">
          <NavDrawer/>
        </Show>
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


export function NavDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  return (
    <>
      <Button ref={btnRef} colorScheme='messenger' onClick={onOpen}>
        =
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerBody>

          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}

  