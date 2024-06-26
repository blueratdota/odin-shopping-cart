import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import required modules
import { Navigation, Pagination, Autoplay } from "swiper/modules";
// Import Responsive
import { useMediaQuery } from "react-responsive";
// Import data
import { topSellers } from "../assets/SampleData";
import TopSellerCard from "./TopSellerCard";

const HomeTopSeller = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 720px)" });
  return (
    <div className="w-full bg-white">
      <div className=" md:max-w-[1270px] md:mx-auto">
        <h2 className="mb-2 md:mb-5 ml-5 pt-5 text-2xl font-medium">
          TOP SELLERS
        </h2>
        {isTabletOrMobile ? (
          <div className="pb-10">
            <Swiper
              slidesPerView={1}
              spaceBetween={0}
              // autoplay={{
              //   delay: 3000,
              //   disableOnInteraction: false
              // }}
              loop={true}
              pagination={{
                clickable: true
              }}
              navigation={true}
              modules={[Pagination, Navigation, Autoplay]}
              className="mySwiper w-full max-h-[750px] z-0"
            >
              {topSellers.map((item) => {
                return (
                  <SwiperSlide className="">
                    <TopSellerCard data={item}></TopSellerCard>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        ) : (
          <div className="pb-10">
            <Swiper
              slidesPerView={3}
              spaceBetween={0}
              pagination={{
                clickable: true
              }}
              modules={[Pagination]}
              className="mySwiper z-0"
            >
              {topSellers.map((item) => {
                return (
                  <SwiperSlide className="min-w-[330px]">
                    <TopSellerCard data={item}></TopSellerCard>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>

          // <div className="pb-20 flex gap-5 overflow-auto">
          //   {topSellers.map((item) => {
          //     return (
          //       <div className="max-h-[400px] min-w-[320px]">
          //         <TopSellerCard data={item}></TopSellerCard>
          //       </div>
          //     );
          //   })}
          // </div>
        )}
      </div>
    </div>
  );
};
export default HomeTopSeller;
