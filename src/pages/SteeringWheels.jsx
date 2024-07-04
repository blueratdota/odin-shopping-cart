// Import Data
import { productData } from "../assets/SampleData";
// Import Responsive
import { useMediaQuery } from "react-responsive";
// Import My Pagination
import PaginatedContent from "../components/PaginatedContent";
//Import router
import { useOutletContext } from "react-router-dom";
function SteeringWheels() {
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
                src="https://fanatec.com/media/image/9f/e4/bb/RS_mob_800x800.jpg"
                alt=""
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute -translate-x-1/2 top-1/2 left-1/2  w-[350px] text-gray-300">
                <h1 className="text-5xl font-medium text-center">
                  STEERING WHEELS
                </h1>
                <div className="w-20  h-1 bg-red-600 blur-[1px] my-7 mx-auto"></div>
                <p className="text-xl text-center">
                  The critical interface between driver and car. Alcantara,
                  carbon fibre, multi-position switches, OLED displays, RevLEDs
                  - cutting-edge technology for the most immersive sim racing
                  experience.
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
                src="https://fanatec.com/media/image/80/e0/4f/RS_left_offset_1920x1920.jpg"
                alt=""
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute top-[30%] 2xl:top-[30%] left-[50vw] 2xl:left-[60vw] w-[350px] 2xl:w-[450px] text-gray-300">
                <h1 className="text-5xl font-medium">STEERING WHEELS</h1>
                <div className="md:w-36 2xl:w-72 h-1 bg-red-600 blur-[1px] my-7 2xl:-translate-x-36"></div>
                <p className="text-xl">
                  The critical interface between driver and car. Alcantara,
                  carbon fibre, multi-position switches, OLED displays, RevLEDs
                  - cutting-edge technology for the most immersive sim racing
                  experience.
                </p>
              </div>
            </div>
          </div>
        </>
      )}

      <PaginatedContent
        data={productData}
        filter={"Steering Wheels"}
        routerLink={"steering-wheels"}
      ></PaginatedContent>
    </div>
  );
}
export default SteeringWheels;
