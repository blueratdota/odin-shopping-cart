import React, { useRef, useState } from "react";
import { Link, useOutletContext } from "react-router-dom";
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
// import { topSellers } from "../assets/SampleData";
import TopSellerCard from "./TopSellerCard";

const backToTop = () => {
  window.scrollTo(0, 0);
};

const HomeTopSeller = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 720px)" });
  const context = useOutletContext();
  const topSellers = context.allProducts.slice(42, 47);
  console.log(context);
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
              loop={true}
              pagination={{
                clickable: true
              }}
              navigation={true}
              modules={[Pagination, Navigation, Autoplay]}
              className="mySwiper w-full max-h-[750px] z-0"
            >
              {topSellers.map((item, i) => {
                return (
                  <SwiperSlide key={i} className="">
                    <Link to={`/all-products/${item.id}`} onClick={backToTop}>
                      <TopSellerCard data={item}></TopSellerCard>
                    </Link>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        ) : (
          <div className="pb-10">
            <Swiper
              slidesPerView={3}
              spaceBetween={50}
              pagination={{
                clickable: true
              }}
              modules={[Pagination]}
              className="mySwiper z-0"
            >
              {topSellers.map((item, i) => {
                return (
                  <SwiperSlide key={i} className="min-w-[330px]">
                    <TopSellerCard data={item}></TopSellerCard>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        )}
      </div>
    </div>
  );
};
export default HomeTopSeller;
