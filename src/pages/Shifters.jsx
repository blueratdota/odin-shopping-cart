// Import Data
// import { productData } from "../assets/SampleData";
// Import Responsive
import { useMediaQuery } from "react-responsive";
// Import My Pagination
import PaginatedContent from "../components/PaginatedContent";
//Import router
import { useOutletContext } from "react-router-dom";
const Shifters = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 720px)" });
  const context = useOutletContext();
  const productData = context.allProducts;
  return (
    <div className="bg-white pb-10">
      {isTabletOrMobile ? (
        <>
          <div className="w-full h-[120vw] relative">
            <div className="w-full h-full relative overflow-hidden">
              <img
                src="https://fanatec.com/media/image/b3/fa/f7/shifters_mob_banner_800x800.png"
                alt=""
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute -translate-x-1/2 top-1/2 left-1/2  w-[350px] text-gray-300">
                <h1 className="text-5xl font-medium text-center">
                  SHIFTERS / OTHERS
                </h1>
                <div className="w-20  h-1 bg-red-600 blur-[1px] my-7 mx-auto"></div>
                <p className="text-xl text-center">
                  Enhance your sim setup by upgrading to our precision
                  peripherals. H-pattern shifters and analogue handbrakes
                  deliver superior realism for many driving disciplines.
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
                src="https://fanatec.com/media/image/cd/4a/91/CSS_SQ_1920x967_left_offset_1920x1920.jpg"
                alt=""
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute top-[30%] 2xl:top-[30%] left-[50vw] 2xl:left-[60vw] w-[350px] 2xl:w-[450px] text-gray-300">
                <h1 className="text-5xl font-medium">SHIFTERS / OTHERS</h1>
                <div className="md:w-36 2xl:w-72 h-1 bg-red-600 blur-[1px] my-7 2xl:-translate-x-36"></div>
                <p className="text-xl">
                  Enhance your sim setup by upgrading to our precision
                  peripherals. H-pattern shifters and analogue handbrakes
                  deliver superior realism for many driving disciplines.
                </p>
              </div>
            </div>
          </div>
        </>
      )}

      <PaginatedContent
        data={productData}
        filter={"Shifters/Others"}
        routerLink={"shifters/others"}
      ></PaginatedContent>
    </div>
  );
};
export default Shifters;
