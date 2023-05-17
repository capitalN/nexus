import { Center, Flex,Hide, Heading, Stack, Text,HStack,Image,Button,  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,useDisclosure ,Show,Link} from '@chakra-ui/react'
import React from "react";

export default function Navbar() {
  return (
    <HStack zIndex={1000} p="10px 20px" position="fixed" w="100%" justify="space-between">
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
        <Link href="#">
          Home
        </Link>
        <Link href="#about">
          About
        </Link>
        <Link href="#work">
          Work
        </Link>
        <Link href="#projects">
          Projects
        </Link>
        <Link href="#team">
          Team
        </Link>
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
            <Image src="logo.png"/>
            <NavLinks/>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}

  