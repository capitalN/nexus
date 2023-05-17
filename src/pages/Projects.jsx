import { Center, Heading, Stack, Text ,Box,Image,VStack, Grid} from '@chakra-ui/react'
import React from 'react'

export default function Projects() {
  return (
    <Box p="20px">
        <Stack border={"1px solid"} h="100%" p="20px"  background="radial-gradient(circle, rgba(53,197,175,1) 35%, rgba(0,117,188,1) 100%);" color="white">
            <Heading w="100%" fontSize={{base:"50px", md:"100px"}} p="10px" textAlign="left">our projects</Heading>
        </Stack>
        <Grid  
            gridTemplateColumns={{
                base: "repeat(1, 1fr)",
                sm: "repeat(1, 1fr)",
                md: "repeat(2, 1fr)",
                lg: "repeat(2, 1fr)",
                xl: "repeat(3, 1fr)",
            }}
            p="20px"
            gap="20px"
            textAlign="justify">



        </Grid>
    </Box>
  )
}