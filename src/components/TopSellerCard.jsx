import numeral from "numeral";
const TopSellerCard = ({ data }) => {
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
    <div className="md:max-h-[480px] md:max-w-[340px] mx-5 pb-10 border shadow-sm overflow-hidden [&>*]:font-medium">
      <div
        className={`${classColors[productClass]} w-fit py-2 px-4 text-white`}
      >
        {productClass}
      </div>
      <div className="bg-indigo-500 w-fit my-3 py-2 px-4 text-white">
        Bundle
      </div>
      <img
        src={data.thumbnail}
        alt=""
        className="w-[75%] h-[75%] object-cover object-top mx-auto"
      />
      <div className="text-center">
        <p className="text-lg">{productName}</p>
        <p className="text-emerald-500  ">¥ {productPrice}</p>
      </div>
    </div>
  );
};
export default TopSellerCard;
