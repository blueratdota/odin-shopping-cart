// Import Data
import { productData } from "../assets/SampleData";
// Import Responsive
import { useMediaQuery } from "react-responsive";
// Import My Pagination
import PaginatedContent from "../components/PaginatedContent";
const Accessories = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 720px)" });
  return (
    <div className="bg-white pb-10">
      {isTabletOrMobile ? (
        <>
          <div className="w-full h-[120vw] relative">
            <div className="w-full h-full relative overflow-hidden">
              <img
                src="https://fanatec.com/media/image/6d/95/d6/cockpits_mob_banner_800x800@2x.png"
                alt=""
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute -translate-x-1/2 top-1/2 left-1/2  w-[350px] text-gray-300">
                <h1 className="text-5xl font-medium text-center">
                  ACCESSORIES
                </h1>
                <div className="w-20  h-1 bg-red-600 blur-[1px] my-7 mx-auto"></div>
                <p className="text-xl text-center">
                  Fanatec accessories that can help you maximize your lap times!
                </p>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="w-full h-[600px]">
            <div className="w-full h-full relative overflow-hidden">
              <img
                src="https://fanatec.com/media/image/16/61/c2/P_MB_2_1920x967_left_offset_1920x1920.jpg"
                alt=""
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute top-[30%] 2xl:top-[30%] left-[50vw] 2xl:left-[60vw] w-[350px] 2xl:w-[450px] text-gray-300">
                <h1 className="text-5xl font-medium">ACCESSORIES</h1>
                <div className="md:w-36 2xl:w-72 h-1 bg-red-600 blur-[1px] my-7 2xl:-translate-x-36"></div>
                <p className="text-xl">
                  Fanatec accessories that can help you maximize your lap times!
                </p>
              </div>
            </div>
          </div>
        </>
      )}

      <PaginatedContent
        data={productData}
        filter={"Accessories"}
      ></PaginatedContent>
    </div>
  );
};
export default Accessories;
