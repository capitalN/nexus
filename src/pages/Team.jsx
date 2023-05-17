import { Center, Heading, Stack, Text ,Box,Image,VStack, HStack, Flex} from '@chakra-ui/react'
import React from 'react'

export default function Team() {
  return (
    <Box>
      <br />
      <Box position={"relative"}>
        <Center position={"absolute"} top="-35px" left="35px" borderRadius={"full"} color="white" boxSize={"70px"} bgColor={"#35c5af"} fontSize={"70px"} fontWeight={"bold"}>
          <Text>"</Text>
        </Center>
        <Flex m="20px" align={"center"} flexWrap={"wrap"} justify={"space-around"} gap="20px"  border={"4px solid #35c5af"} p="20px">
            <Image src="https://th.bing.com/th/id/OIP.Ht5mwwThZX9HVW7zzrjawAAAAA?pid=ImgDet&rs=1" borderRadius={"full"}/>
            <Stack maxW={"800px"}>
                <Heading fontSize={"50px"}  color={"#0075bc"}>My Name</Heading>
                <Heading fontSize={"25px"} color="#35c5af">Post, Company</Heading>
                <Text fontSize={"25px"}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione modi et deserunt reprehenderit delectus alias vitae natus atque harum quia quod nihil voluptatem saepe, ipsum animi ex quibusdam fuga possimus!</Text>
            </Stack>
        </Flex>
      </Box>

      <br />
      <br />

      <Box position={"relative"}>
        <Center position={"absolute"} top="-35px" right="35px" borderRadius={"full"} color="white" boxSize={"70px"} bgColor={"#35c5af"} fontSize={"70px"} fontWeight={"bold"}>
          <Text>"</Text>
        </Center>
        <Flex m="20px" align={"center"} flexWrap={"wrap-reverse"} justify={"space-around"} gap="20px"  border={"4px solid #35c5af"} p="20px">
            <Stack maxW={"800px"}>
                <Heading fontSize={"50px"} color={"#0075bc"}>My Name</Heading>
                <Heading fontSize={"25px"} color="#35c5af">Post, Company</Heading>
                <Text fontSize={"25px"}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione modi et deserunt reprehenderit delectus alias vitae natus atque harum quia quod nihil voluptatem saepe, ipsum animi ex quibusdam fuga possimus!</Text>
            </Stack>
            <Image src="https://th.bing.com/th/id/OIP.Ht5mwwThZX9HVW7zzrjawAAAAA?pid=ImgDet&rs=1" borderRadius={"full"}/>
        </Flex>
      </Box>

    </Box>
  )
}
