import { Center, Heading, Stack, Text ,Box,Image,VStack, Grid} from '@chakra-ui/react'
import React from 'react'

export default function Projects() {
  return (
    <Box>
        <Stack m="20px" p="20px"  background="radial-gradient(circle, rgba(53,197,175,1) 35%, rgba(0,117,188,1) 100%);" color="white">
            <Heading w="100%" fontSize={{base:"50px", md:"100px"}} p="10px" textAlign="left">our projects</Heading>
        </Stack>
        <Grid
            gridTemplateColumns={{
                base: "repeat(1, 1fr)",
                sm: "repeat(1, 1fr)",
                md: "repeat(1, 1fr)",
                lg: "repeat(3, 1fr)",
                xl: "repeat(3, 1fr)",
            }}
            p="20px"
            gap="20px"
            textAlign="justify">
              {projects.map(({title, image, description})=>(
                <Stack key={title} >
                  <Image src={image} w="100%"/>
                  <Heading color="#0075bc" fontSize={"25px"}>{title}</Heading>
                </Stack>
              ))}
        </Grid>
    </Box>
  )
}

let projects = [{
    title:"Flex Printing",
    image:"https://www.nexusmedia.co.in/images/service/service-1-1.jpg",
    description:"lorem ipsum lorem ipsomlorem ipsum lorem ipsom"
  },{
    title:"Digital Printing",
    image:"https://www.nexusmedia.co.in/images/service/service-1-2.jpg",
    description:"lorem ipsum lorem ipsomlorem ipsum lorem ipsom"
  },{
    title:"Design & Branding",
    image:"https://www.nexusmedia.co.in/images/service/service-1-3.jpg",
    description:"lorem ipsum lorem ipsomlorem ipsum lorem ipsom"
  }
]