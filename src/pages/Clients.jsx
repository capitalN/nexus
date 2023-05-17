import { Center, Heading, Stack, Text ,Box,Image,VStack} from '@chakra-ui/react'
import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function Clients() {
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 5,
          slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 3,
          slidesToSlide: 1 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };

      let Brands = [1,2,3,4,5,6,7,8]

  return (
    <Box bgColor={"#0075bc"} pt="20px" >
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
            centerMode={true}
            customTransition="transform 500ms ease-in-out"
            transitionDuration={1000}
        >
            {Brands.map((brand)=>(
                <Image p="10px" src={`https://www.nexusmedia.co.in/imgs/brand/client-${brand}.png`}/>
            ))}
        </Carousel>;
    </Box>
  )
}
