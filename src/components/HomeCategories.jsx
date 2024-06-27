import CategoryCard from "./CategoryCard";

const HomeCategories = () => {
  return (
    <div className="w-full category-bg pb-[100px] relative z-0">
      <h2 className="uppercase text-gray-300 text-3xl text-center font-medium pt-16 pb-8">
        Our categories at a <span className="text-white">glance</span>{" "}
      </h2>
      <div className="[&>div]:border [&>div]:bg-white mx-4 md:grid md:grid-cols-4 md:grid-rows-2 md:auto-rows-auto md:max-w-[1270px] md:mx-auto shadow-sm">
        <CategoryCard className={"md:col-span-2 md:row-span-2"}>
          <div className="glance-container">
            <p className="glance-label">Racing wheels/ Wheel Bases</p>
            <img
              src="https://fanatec.com/media/image/00/33/31/RW_WB_icon_2.jpg"
              alt=""
              className="h-full w-full object-contain duration-75 ease-linear hover:scale-110 "
            />
          </div>
        </CategoryCard>
        <CategoryCard className={"md:col-span-1 md:row-span-1"}>
          <div className="glance-container">
            <p className="glance-label">Steering Wheels</p>
            <img
              src="https://fanatec.com/media/image/d8/90/1f/fp_sw_thumb_2.jpg"
              alt=""
              className="h-full w-full object-contain duration-75 ease-linear   hover:scale-110 "
            />
          </div>
        </CategoryCard>
        <CategoryCard className={"md:col-span-1 md:row-span-1"}>
          <div className="glance-container">
            <p className="glance-label">Shifters</p>
            <img
              src="https://fanatec.com/media/image/20/c2/06/fp_shifter_thumb_2.jpg"
              alt=""
              className="h-full w-full object-contain duration-75 ease-linear   hover:scale-110 "
            />
          </div>
        </CategoryCard>
        <CategoryCard className={"md:col-span-1 md:row-span-1"}>
          <div className="glance-container">
            <p className="glance-label">Pedals</p>
            <img
              src="https://fanatec.com/media/image/96/d3/ef/Screen-Shot-2017-07-27-at-11-56-05.png"
              alt=""
              className="h-full w-full object-contain duration-75 ease-linear   hover:scale-110 "
            />
          </div>
        </CategoryCard>
        <CategoryCard className={"md:col-span-1 md:row-span-1"}>
          <div className="glance-container">
            <p className="glance-label">Cockpits/ Mounting</p>
            <img
              src="https://fanatec.com/media/image/4b/43/f4/mount_glancePFfUeTsFOlAzJ.jpg"
              alt=""
              className="h-full w-full object-contain duration-75 ease-linear   hover:scale-110 "
            />
          </div>
        </CategoryCard>
      </div>
    </div>
  );
};
export default HomeCategories;
