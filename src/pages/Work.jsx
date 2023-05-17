import { Center, Heading, Stack, Text ,Box,Image,VStack,Grid,HStack, Icon} from '@chakra-ui/react'
import {FaBullhorn,FaPaintBrush,FaPrint } from "react-icons/fa";

export default function Work() {
  return (
    <Center minH="100vh">
      <Grid
          gridTemplateColumns={{
            base: "repeat(1, 1fr)",
            lg: "repeat(2, 1fr)",
          }}
          p="20px"
          gap="20px"
          textAlign="justify"
        >
            <Box border={"1px solid"} h="100%" p="20px" background="#35c5af" color="white">
                <Heading fontSize={{base:"50px", md:"100px"}} p="10px" textAlign="left">what we do?</Heading>
                <Text fontSize={"25px"}>
                Our experience has built us an enviable reputation for consistently delivering the wow factor, underpinned with intelligent and thoughtful design that is focused on delivering a clear return on your investment. Whether you’re looking for a full project solution or require specific design skills to complement your in-house team, we deliver solutions that pack a real punch.
                </Text>
                </Box>
                <Center>
                <Stack gap={"10px"} w="100%">
                {work.map(({ icon, title,description }) => (
                    <Stack  p="20px">
                        <HStack>
                            <Icon as={icon} />
                            <Text fontSize={"25px"} fontWeight="bold">{title}</Text>
                        </HStack>
                        
                        <Text maxW={"400px"} textAlign="justify" fontSize={"25px"}>
                            {description}
                        </Text>
                    </Stack>
                ))}
                </Stack>
            </Center>
        </Grid>
    </Center>
  )
}

let work = [
    {
      icon: FaBullhorn,
      title:"Markating",
      description:
        "lorem ipsum, lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
    },
    {
      icon: FaPaintBrush,
      title:"Graphic Design",
      description:
      "lorem ipsum, lorem ipsum lorem ipsum lorem ipsum lorem ipsum",  
    },
    {
      icon: FaPrint,
      title:"Printing",
      description:
      "lorem ipsum, lorem ipsum lorem ipsum lorem ipsum lorem ipsum",    
    },
  ];