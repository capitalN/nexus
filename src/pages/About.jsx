import { Center, Heading, Stack, Text ,Box,Image,VStack,Grid} from '@chakra-ui/react'

export default function About() {
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
          h="100%"
        >
        <Box border={"1px solid"} h="100%" p="20px"  background="radial-gradient(circle, rgba(53,197,175,1) 35%, rgba(0,117,188,1) 100%);" color="white">
          <Heading fontSize={{base:"50px", md:"100px"}} p="10px" textAlign="left">who we are?</Heading>
          <Text fontSize={"25px"}>
            We’re not selling “big agency services at small agency prices”. We deliver exceptional design solutions to complex business problems – extremely efficiently and delivered at lightning-fast pace.
            <br />
            <br />
            It’s our approach that’s different. We won’t bring an army to the battle. We bring a lean team of experts with bags of experience to the table, who will quickly get to the heart of what you’re looking to achieve.
          </Text>
        </Box>
        <Image src="marketing.jpg" alt="markating" h="100%" overflow="hidden" />
      </Grid>
    </Center>
  )
}
