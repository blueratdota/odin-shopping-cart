import { useParams } from "react-router-dom";
// import { productData } from "../assets/SampleData";
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
//Import router
import { useOutletContext } from "react-router-dom";

//color for circle/button
const availablityColor = {
  "In Stock": { circle: "bg-green-400", text: "text-green-400" },
  "Pre-Order": { circle: "bg-yellow-400", text: "text-yellow-400" },
  "No Stock": { circle: "bg-red-400", text: "text-red-400" }
};

function Product() {
  const context = useOutletContext();
  const productData = context.allProducts;

  const { id } = useParams();
  const product = productData.filter((item) => {
    return item.id == id;
  })[0];
  // console.log(product);
  return (
    <div className="bg-imgGray">
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
          <div className="flex flex-col md:flex-row gap-4 md:gap-10 justify-center pt-10">
            <div>
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
            </div>
            <div className="flex flex-col gap-4 md:[&>button]:px-7   ">
              {product.availability == "In Stock" ? (
                <Button
                  className=" w-full py-4 flex items-center gap-2 bg-gray-700 text-white"
                  onClick={() => {
                    // turn this into a function
                    // creates a local var with all the unique ids in the inCart
                    // if currrently being added item to cart's id is included inCart, only ++quantity
                    // else create a new array entry in inCart
                    const cartItemsID = context.inCart.map((entry) => {
                      return entry.id;
                    });
                    console.log(cartItemsID);
                    if (cartItemsID.includes(product.id)) {
                      context.setInCart(
                        context.inCart.map((item) => {
                          if (product.id == item.id) {
                            return { ...product, quantity: item.quantity + 1 };
                          } else return item;
                        })
                      );
                    } else
                      context.setInCart([
                        ...context.inCart,
                        { ...product, quantity: 1 }
                      ]);
                  }}
                >
                  <Icon path={mdiCartOutline} className="h-5 block"></Icon>{" "}
                  <p className="text-lg"> Add to cart</p>
                </Button>
              ) : product.availability == "Pre-Order" ? (
                <Button
                  className=" w-full py-4 flex items-center gap-2 bg-gray-700 text-white"
                  onClick={() => {
                    // turn this into a function
                    // creates a local var with all the unique ids in the inCart
                    // if currrently being added item to cart's id is included inCart, only ++quantity
                    // else create a new array entry in inCart
                    const cartItemsID = context.inCart.map((entry) => {
                      return entry.id;
                    });
                    if (cartItemsID.includes(product.id)) {
                      context.setInCart(
                        context.inCart.map((item) => {
                          if (item.id == product.id) {
                            return { ...product, quantity: item.quantity + 1 };
                          } else return item;
                        })
                      );
                    } else
                      context.setInCart([
                        ...context.inCart,
                        { ...data, quantity: 1 }
                      ]);
                  }}
                >
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
        </div>
        <div className="mx-4 py-10 md:w-[420px] md:text-center md:mx-auto">
          <p className="text-xl indent-2">{product.description}</p>
          <ul className="pt-5 ">
            {product.features.map((entry, i) => {
              return (
                <li key={i} className="flex text-left">
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
