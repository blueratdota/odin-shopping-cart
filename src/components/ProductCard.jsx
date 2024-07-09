import { Button } from "@chakra-ui/react";
import Icon from "@mdi/react";
import { mdiCartOutline, mdiClose } from "@mdi/js";
import numeral from "numeral";
import { Link, useOutletContext } from "react-router-dom";
const ProductCard = ({ data, routerLink }) => {
  const productClass = data.class;
  const productName = data.name;
  const productPrice = numeral(data.price).format("0,0");
  const classColors = {
    GT: "bg-green-500",
    QR: "bg-yellow-500",
    CSL: "bg-blue-500",
    ClubSport: "bg-red-500",
    Podium: "bg-orange-500"
  };
  const availablityColor = {
    "In Stock": { circle: "bg-green-400", text: "text-green-400" },
    "Pre-Order": { circle: "bg-yellow-400", text: "text-yellow-400" },
    "No Stock": { circle: "bg-red-400", text: "text-red-400" }
  };
  const backToTop = () => {
    window.scrollTo(0, 0);
  };
  const context = useOutletContext();
  // console.log(context);
  return (
    <div className=" relative mx-5 pb-6 border shadow-sm overflow-hidden [&>*]:font-medium 0 flex flex-col justify-between">
      <div className="h-full">
        <Link
          to={`/${routerLink}/${data.id}`}
          onClick={backToTop}
          className="h-full flex flex-col justify-between "
        >
          <div className="h-full">
            <div
              className={`${classColors[productClass]} w-fit py-2 px-4 text-white absolute `}
            >
              {productClass}
            </div>
            <div
              className={`bg-teal-600 w-fit py-2 px-4 top-12 text-white absolute ${data.category == "Wheel Bases" ? "" : "hidden"}`}
            >
              Bundle
            </div>
            <div className="h-full flex flex-col">
              <img
                src={data.thumbnail}
                alt=""
                className="w-[75%] object-cover object-bottom mx-auto my-auto pt-10 pb-5"
              />
            </div>
          </div>

          <div className="text-center flex flex-col gap-2">
            <p className="text-xl font-semibold">{productName}</p>
            <p className="text-emerald-500 text-lg  ">¥ {productPrice}</p>
            <div className="flex justify-center items-center content-center gap-3">
              <div
                className={`${availablityColor[data.availability].circle} size-4 rounded-[50%] opacity-50`}
              ></div>
              <div
                className={`${availablityColor[data.availability].text} text-lg`}
              >
                {data.availability}
              </div>
            </div>
          </div>
        </Link>
      </div>

      <div className="flex justify-center pt-5">
        <Button
          className={`w-[90%] py-2 flex items-center gap-2 ${data.availability == "No Stock" ? "bg-gray-400" : "bg-gray-700"} text-white`}
          onClick={() => {
            // turn this into a function
            // creates a local var with all the unique ids in the inCart
            // if currrently being added item to cart's id is included inCart, only ++quantity
            // else create a new array entry in inCart
            const cartItemsID = context.inCart.map((entry) => {
              return entry.id;
            });
            if (cartItemsID.includes(data.id)) {
              context.setInCart(
                context.inCart.map((item) => {
                  if (item.id == data.id) {
                    return { ...data, quantity: item.quantity + 1 };
                  } else return item;
                })
              );
            } else
              context.setInCart([...context.inCart, { ...data, quantity: 1 }]);
          }}
          isDisabled={(() => {
            if (data.availability == "No Stock") {
              return true;
            } else return false;
          })()}
        >
          {data.availability == "No Stock" ? (
            <>
              <Icon path={mdiClose} className="h-5 block"></Icon>{" "}
              <p className="text-lg"> Out of stock</p>
            </>
          ) : (
            <>
              <Icon path={mdiCartOutline} className="h-5 block"></Icon>{" "}
              <p className="text-lg"> Add to cart</p>
            </>
          )}
        </Button>
      </div>
    </div>
  );
};
export default ProductCard;
