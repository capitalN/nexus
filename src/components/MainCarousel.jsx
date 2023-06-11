import { Center, Heading, Stack, Text ,Box,Image,VStack} from '@chakra-ui/react'
import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function MainCarousel() {
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };

      let Slides = [{img:"slider-1.jpg", title:"ADVERTISING", subTitle:"Next Level Printing in Belgaum"},
                    {img:"slider-2.jpg", title:"BRANDING", subTitle:"Next Level Printing in Belgaum"},
                    {img:"slider-1.jpg", title:"CREATIVITY", subTitle:"Next Level Printing in Belgaum"}]

  return (
    <Box >
        <Carousel
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={1000}
            keyBoardControl={true}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
            customTransition="transform 500ms ease-in-out"
            transitionDuration={2000}
        >
            {Slides.map(({img, title, subTitle})=>(
                <Center color="white" bgImage={img} bgPosition={"center"} bgSize={"cover"} bgRepeat={"no-repeat"} minH={"100vh"}>
                  <VStack textAlign="center">
                    <Text fontSize={"2rem"}>Welcome to</Text>
                    <Heading fontSize={"5rem"}>
                      NEXUS MEDIA
                    </Heading>
                    <Text fontSize={"2rem"}>Next Level Printing in Belgaum</Text>
                    <Heading fontSize={""}>
                      {title}
                    </Heading>
                    <Text>{subTitle}</Text>
                  </VStack>
                </Center>
            ))}
        </Carousel>;
    </Box>
  )
}
