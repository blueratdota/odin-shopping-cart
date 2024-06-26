import CategoryCard from "./CategoryCard";
const HomeSeries = () => {
  return (
    <div className="w-full bg-white pb-[100px] relative z-0">
      <h2 className="uppercase text-gray-500 text-3xl text-center font-medium pt-16 pb-8">
        Our seriess at a <span className="text-black">glance</span>{" "}
      </h2>
      <div className="[&>div]:border [&>div]:bg-white mx-4 md:flex md:max-w-[1270px] md:mx-auto shadow-sm">
        <CategoryCard>
          <div className="overflow-hidden">
            <img
              src="https://fanatec.com/media/image/1b/ec/42/P_APM_Podium_Tile_2.jpg"
              alt=""
              className="h-full w-full object-contain duration-75 ease-linear   hover:scale-110 "
            />
          </div>
        </CategoryCard>
        <CategoryCard>
          <div className="overflow-hidden">
            <img
              src="https://fanatec.com/media/image/fc/be/b5/Screen-Shot-2017-07-27-at-15-10-37.png"
              alt=""
              className="h-full w-full object-contain duration-75 ease-linear   hover:scale-110 "
            />
          </div>
        </CategoryCard>
        <CategoryCard>
          <div className="overflow-hidden">
            <img
              src="https://fanatec.com/media/image/bc/b0/4c/fp_CSL_thumb_4.jpg"
              alt=""
              className="h-full w-full object-contain duration-75 ease-linear   hover:scale-110 "
            />
          </div>
        </CategoryCard>
      </div>
    </div>
  );
};
export default HomeSeries;
