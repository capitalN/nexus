import { Center, Heading, Stack, Text ,Box,Image,VStack,Grid,HStack, Icon} from '@chakra-ui/react'
import { TiCodeOutline, TiBrush, TiDeviceLaptop } from "react-icons/ti";
export default function Work() {
  return (
    <Center minH="100vh">
      <Grid
          gridTemplateColumns={{
            base: "repeat(1, 1fr)",
            sm: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
          }}
          p="20px"
          gap="20px"
          textAlign="justify"
        >
            <Box border={"1px solid"} h="100%" p="20px" borderRadius="20px" background="radial-gradient(circle, rgba(53,197,175,1) 35%, rgba(0,117,188,1) 100%);" color="white">
                <Heading fontSize={{base:"50px", md:"100px"}} p="10px" textAlign="left">what we do?</Heading>
                <Text fontSize={"25px"}>
                Our experience has built us an enviable reputation for consistently delivering the wow factor, underpinned with intelligent and thoughtful design that is focused on delivering a clear return on your investment. Whether you’re looking for a full project solution or require specific design skills to complement your in-house team, we deliver solutions that pack a real punch.
                </Text>
                </Box>
                <Center>
                <Stack gap={"10px"} w="100%">
                {about.map(({ icon, title,description, color }) => (
                    <Stack  p="20px" bgSize="cover" borderRadius="20px" color="white" bgPosition="center"  minH="220px" bgImage="https://5.imimg.com/data5/SELLER/Default/2020/10/QY/MF/VH/1182530/flex-printing-500x500.jpg" bgRepeat="no-repeat">
                        <Text fontSize={"25px"} fontWeight="bold">{title}</Text>
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

let about = [
    {
      icon: TiDeviceLaptop,
      title:"Flex Printing",
      description:
        "lorem ipsum, lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
    },
    {
      icon: TiCodeOutline,
      title:"Digital Printing",
      description:
      "lorem ipsum, lorem ipsum lorem ipsum lorem ipsum lorem ipsum",  
    },
    {
      icon: TiBrush,
      title:"Designing & Branding",
      description:
      "lorem ipsum, lorem ipsum lorem ipsum lorem ipsum lorem ipsum",    
    },
  ];