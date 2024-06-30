import { Button } from "@chakra-ui/react";
import Icon from "@mdi/react";
import { mdiCartOutline } from "@mdi/js";
import numeral from "numeral";
const ProductCard = ({ data }) => {
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
  return (
    <div className="md:max-h-[520px] md:max-w-[340px] relative mx-5 pb-10 border shadow-sm overflow-hidden [&>*]:font-medium">
      <div
        className={`${classColors[productClass]} w-fit py-2 px-4 text-white absolute `}
      >
        {productClass}
      </div>
      <div
        className={`bg-indigo-500 w-fit py-2 px-4 top-12 text-white absolute ${data.category == "Wheel Bases" ? "" : "hidden"}`}
      >
        Bundle
      </div>
      <img
        src={data.thumbnail}
        alt=""
        className="w-[75%] h-[75%] object-cover object-top mx-auto mt-10"
      />
      <div className="text-center">
        <p className="text-lg font-semibold">{productName}</p>
        <p className="text-emerald-500  ">¥ {productPrice}</p>
      </div>
      <div>{data.availability}</div>
      <div className="flex justify-center">
        <Button className=" w-[90%] py-2 flex items-center gap-2 bg-gray-700 text-white">
          <Icon path={mdiCartOutline} className="h-5 block"></Icon>{" "}
          <p className="text-lg"> Add to cart</p>
        </Button>
      </div>
    </div>
  );
};
export default ProductCard;
