import { useParams } from "react-router-dom";
import { productData } from "../assets/SampleData";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import required modules
import { Navigation, Pagination, Autoplay } from "swiper/modules";
// import button stuff
import { Button } from "@chakra-ui/react";
import Icon from "@mdi/react";
import {
  mdiCartOutline,
  mdiHeartOutline,
  mdiCheckAll,
  mdiClose
} from "@mdi/js";

//color for circle/button
const availablityColor = {
  "In Stock": { circle: "bg-green-400", text: "text-green-400" },
  "Pre-Order": { circle: "bg-yellow-400", text: "text-yellow-400" },
  "No Stock": { circle: "bg-red-400", text: "text-red-400" }
};

function Product() {
  const { id } = useParams();
  const product = productData.filter((item) => {
    return item.id == id;
  })[0];
  console.log(product);
  return (
    <div className="bg-imgGray">
      {/* <div className="w-full h-[100vw] relative">
        <div className="w-full h-full relative overflow-hidden">
          <img
            src={product.image[0]}
            alt=""
            className="w-full h-full object-contain object-top"
          />
          <div className="absolute -translate-x-1/2 top-1/2 left-1/2  w-[350px] text-gray-300">
            <h1 className="text-5xl font-medium text-center">
              SHIFTERS / OTHERS
            </h1>
            <div className="w-20  h-1 bg-red-600 blur-[1px] my-7 mx-auto"></div>
            <p className="text-xl text-center">
              Enhance your sim setup by upgrading to our precision peripherals.
              H-pattern shifters and analogue handbrakes deliver superior
              realism for many driving disciplines.
            </p>
          </div>
        </div>
      </div> */}
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
        className="mySwiper w-full h-[100vw] md:h-[30vw] z-0"
      >
        {product.image.map((photo, i) => {
          return (
            <SwiperSlide key={i} className="">
              <div className="w-full h-full relative overflow-hidden">
                <img
                  src={photo}
                  alt=""
                  className="w-full h-full object-cover md:object-contain md:object-center object-top"
                />
              </div>
              <h2 className="absolute top-5 right-5 text-3xl font-semibold text-white ">
                {product.class}
              </h2>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="bg-white">
        <div className="mx-4">
          <div className="flex flex-col gap-4 justify-center pt-10">
            <div className="text-center font-semibol [&>*]:py-2">
              <h1 className=" text-3xl d">{product.name}</h1>
              <h2 className="text-emerald-500 text-xl">¥ {product.price}</h2>
            </div>
            <div className="flex justify-center items-center content-center py-2 gap-3">
              <div
                className={`${availablityColor[product.availability].circle} size-4 rounded-[50%] opacity-50`}
              ></div>
              <div
                className={`${availablityColor[product.availability].text} text-lg`}
              >
                {product.availability}
              </div>
            </div>
            {product.availability == "In Stock" ? (
              <Button className=" w-full py-4 flex items-center gap-2 bg-gray-700 text-white">
                <Icon path={mdiCartOutline} className="h-5 block"></Icon>{" "}
                <p className="text-lg"> Add to cart</p>
              </Button>
            ) : product.availability == "Pre-Order" ? (
              <Button className=" w-full py-4 flex items-center gap-2 bg-gray-700 text-white">
                <Icon path={mdiCheckAll} className="h-5 block"></Icon>{" "}
                <p className="text-lg"> Pre-Order</p>
              </Button>
            ) : (
              <Button
                isDisabled={true}
                className=" w-full py-4 flex items-center gap-2 bg-gray-400 text-white"
              >
                <Icon path={mdiClose} className="h-5 block"></Icon>{" "}
                <p className="text-lg"> Email me once available</p>
              </Button>
            )}

            <Button className=" w-full py-4 flex items-center gap-2 border ">
              <Icon path={mdiHeartOutline} className="h-5 block"></Icon>{" "}
              <p className="text-lg"> Add to favorites</p>
            </Button>
          </div>
        </div>
        <div className="mx-4 py-10">
          <p className="text-xl indent-2">{product.description}</p>
          <ul className="pt-5 ">
            {product.features.map((entry) => {
              return (
                <li className="flex">
                  <div>*</div>
                  <p>{entry}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Product;
