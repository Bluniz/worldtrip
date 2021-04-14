import { Flex, Image, Box, Text, Heading } from "@chakra-ui/react";
import { useEffect } from "react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export function Carousel() {
  return (
    <Flex maxWidth={1240} height={450} mb="20" mx="auto">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <Box position="relative">
            <Image src="/images/europe.jpg" />
            <Flex
              maxH={450}
              position="absolute"
              top="0"
              bottom="0"
              left="0"
              right="0"
              direction="column"
              align="center"
              justify="center"
              bg="rgba(0,0,0,0.5)"
            >
              <Heading color="gray.100">Europa</Heading>
              <Text color="gray.100">O continente mais antigo.</Text>
            </Flex>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box position="relative">
            <Image src="/images/south_america.jpg" />
            <Flex
              maxH={450}
              position="absolute"
              top="0"
              bottom="0"
              left="0"
              right="0"
              direction="column"
              align="center"
              justify="center"
              bg="rgba(0,0,0,0.5)"
            >
              <Heading color="gray.100">América do Sul</Heading>
              <Text color="gray.100">Algum continente</Text>
            </Flex>
          </Box>
        </SwiperSlide>
      </Swiper>
    </Flex>
  );
}
