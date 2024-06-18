import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { productData, bannerPhotos } from "../assets/SampleData";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

const HomeCarousel = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        pagination={{
          clickable: true
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper h-[400px] w-[800px]"
      >
        <SwiperSlide>
          <div className="bg-white">
            click me
            <img src={bannerPhotos[0]} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={bannerPhotos[1]} alt="" />
          <div className="bg-white">click me</div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={bannerPhotos[2]} alt="" />
          <div className="bg-white">click me</div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={bannerPhotos[3]} alt="" />
          <div className="bg-white">click me</div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={bannerPhotos[4]} alt="" />
          <div className="bg-white">click me</div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};
export default HomeCarousel;
