import CategoryCard from "./CategoryCard";
const HomeSeries = () => {
  return (
    <div className="w-full bg-white pb-[100px] relative z-0">
      <h2 className="uppercase text-gray-500 text-3xl text-center font-medium pt-16 pb-8">
        Our series at a <span className="text-black">glance</span>{" "}
      </h2>
      <div className=" [&>div]:bg-white mx-4 md:flex md:max-w-[1270px] md:mx-auto shadow-sm">
        <CategoryCard>
          <div className="glance-container md:h-[250px]">
            <p className="glance-label">Podium Series</p>
            <img
              src="https://fanatec.com/media/image/1b/ec/42/P_APM_Podium_Tile_2.jpg"
              alt=""
              className="series-img"
            />
          </div>
          <div className="hidden md:block pl-2 pr-4">
            <h2 className="uppercase mt-4 text-xl">Podium</h2>
            <div className="w-10 h-1 bg-red-600 blur-[1px] mb-4"></div>
            <p className="text-gray-400">
              The pinnacle of the Fanatec ecosystem. Only the highest
              performance hardware can be defined as a Podium product. If you
              want the very best, this is it.
            </p>
          </div>
        </CategoryCard>
        <CategoryCard>
          <div className="glance-container md:h-[250px]">
            <p className="glance-label">ClubSport Series</p>
            <img
              src="https://fanatec.com/media/image/fc/be/b5/Screen-Shot-2017-07-27-at-15-10-37.png"
              alt=""
              className="series-img"
            />
          </div>
          <div className="hidden md:block pl-2 pr-4">
            <h2 className="uppercase mt-4 text-xl">ClubSport</h2>
            <div className="w-10 h-1 bg-red-600 blur-[1px] mb-4"></div>
            <p className="text-gray-400">
              Premium sim racing hardware using advanced technology and robust,
              high quality materials. ClubSport products are built for demanding
              sim racing enthusiasts.
            </p>
          </div>
        </CategoryCard>
        <CategoryCard>
          <div className="glance-container md:h-[250px]">
            <p className="glance-label">CSL Series</p>
            <img
              src="https://fanatec.com/media/image/bc/b0/4c/fp_CSL_thumb_4.jpg"
              alt=""
              className="series-img"
            />
          </div>
          <div className="hidden md:block pl-2 pr-4">
            <h2 className="uppercase mt-4 text-xl">CSL</h2>
            <div className="w-10 h-1 bg-red-600 blur-[1px] mb-4"></div>
            <p className="text-gray-400">
              Our entry-level CSL hardware series shares technology with
              ClubSport products, with an emphasis on delivering performance and
              value.
            </p>
          </div>
        </CategoryCard>
      </div>
    </div>
  );
};
export default HomeSeries;
