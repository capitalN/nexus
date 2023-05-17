import { Center, Heading, Stack, Text ,Box,Image,VStack,Grid} from '@chakra-ui/react'

export default function About() {
  return (
    <Center>
      <Grid
          gridTemplateColumns={{
            base: "repeat(1, 1fr)",
            lg: "repeat(2, 1fr)",
          }}
          p="20px"
          gap="20px"
          textAlign="justify"
          h="100%"
        >
        <Box  border={"4px solid #0075bc"} h="100%" p="20px">
          <Heading fontSize={{base:"50px", md:"100px"}} p="10px" textAlign="left">who we are?</Heading>
          <Text fontSize={"25px"}>
            We’re not selling “big agency services at small agency prices”. We deliver exceptional design solutions to complex business problems – extremely efficiently and delivered at lightning-fast pace.
            <br />
            <br />
            It’s our approach that’s different. We won’t bring an army to the battle. We bring a lean team of experts with bags of experience to the table, who will quickly get to the heart of what you’re looking to achieve.
          </Text>
        </Box>
        <Box w="100%" h="100%" bgImage={"marketing.jpg"} bgSize={"cover"} bgRepeat={"no-repeat"} bgPosition={"center"}>
          
        </Box>
      </Grid>
    </Center>
  )
}
