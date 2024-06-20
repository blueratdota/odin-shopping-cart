import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import {
  productData,
  bannerPhotos,
  smBannerPhotos
} from "../assets/SampleData";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// Import Responsive
import { useMediaQuery } from "react-responsive";

// import required modules
import {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
  Autoplay
} from "swiper/modules";

const HomeCarousel = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 720px)" });
  return (
    <>
      {isTabletOrMobile ? (
        <Swiper
          slidesPerView={1}
          spaceBetween={0}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false
          }}
          loop={true}
          pagination={{
            clickable: true
          }}
          navigation={true}
          modules={[Pagination, Navigation, Autoplay]}
          className="mySwiper w-full h-[100vw] z-0"
        >
          {smBannerPhotos.map((photo) => {
            return (
              <SwiperSlide className="">
                <div className="w-full h-full relative overflow-hidden">
                  <img
                    src={photo}
                    alt=""
                    className="w-full h-full object-cover object-top"
                  />
                </div>

                <div className="absolute w-[40%] h-[2px] bg-blue-500 blur-[1px] -translate-x-1/2 -translate-y-1/2 top-[65%] left-[50%] -skew-x-[60deg] ">
                  {" "}
                </div>
                <div className="skewed-btn-sm mx-auto"></div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      ) : (
        <Swiper
          slidesPerView={1}
          spaceBetween={0}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false
          }}
          loop={true}
          pagination={{
            clickable: true
          }}
          navigation={true}
          modules={[Pagination, Navigation, Autoplay]}
          className="mySwiper w-full h-[30vw] z-0"
        >
          {bannerPhotos.map((photo) => {
            return (
              <SwiperSlide className="">
                <div className="w-full h-full relative overflow-hidden">
                  <img
                    src={photo}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="skewed-btn "></div>
                <div className="absolute w-[25%] h-[2px] bg-red-500 blur-[1px] top-[40%] left-[45%] -skew-x-[60deg]">
                  {" "}
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      )}
    </>
  );
};
export default HomeCarousel;
