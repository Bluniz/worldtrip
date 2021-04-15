import { Flex, Image, Box, Text, Heading } from "@chakra-ui/react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import { SwiperSlideContent } from "./SwiperSlideContent";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export function Carousel() {
  return (
    <Flex
      maxWidth={["100%", "90%"]}
      height={[200, 450]}
      mb={["10", "20"]}
      mx="auto"
    >
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
          <SwiperSlideContent
            image="/images/europe.jpg"
            title="Europa"
            description="O continente mais antigo."
          />
        </SwiperSlide>
        <SwiperSlide>
          <SwiperSlideContent
            image="/images/south_america.jpg"
            title="América do Sul"
            description="Algum continente"
          />
        </SwiperSlide>
      </Swiper>
    </Flex>
  );
}
