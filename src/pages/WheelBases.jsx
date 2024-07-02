// Import Data
import { productData } from "../assets/SampleData";
// Import Responsive
import { useMediaQuery } from "react-responsive";
// Import My Pagination
import PaginatedContent from "../components/PaginatedContent";
const WheelBases = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 720px)" });
  return (
    <div className="bg-white pb-10">
      {isTabletOrMobile ? (
        <>
          <div className="w-full h-[150vw] relative">
            <div className="w-full h-full relative overflow-hidden">
              <img
                src="https://fanatec.com/media/image/a2/65/64/P_RW_Formula_V2-5X_mob_800x800@2x.jpg"
                alt=""
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute -translate-x-1/2 top-1/2 left-1/2  w-[350px] text-gray-300">
                <h1 className="text-5xl font-medium text-center">
                  WHEEL BASES
                </h1>
                <div className="w-20  h-1 bg-red-600 blur-[1px] my-7 mx-auto"></div>
                <p className="text-center">
                  Racing Wheels are bundled products that combine selected
                  Steering Wheels and Wheel Bases. The wheel base is the heart
                  of our ecosystem, combining all Fanatec peripherals to deliver
                  a seamless sim racing experience. When building a Fanatec
                  simulator setup, we recommend selecting a Racing Wheel or
                  Wheel Base first.
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
                src="https://fanatec.com/media/image/65/f5/24/P_RW_Formula_V2-5X_1280x1280.jpg"
                alt=""
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute top-[20%] 2xl:top-[20%] left-[50vw] 2xl:left-[60vw] w-[350px] 2xl:w-[550px] text-gray-300">
                <h1 className="text-5xl font-medium">WHEEL BASES</h1>
                <div className="md:w-36 2xl:w-72 h-1 bg-red-600 blur-[1px] my-7 2xl:-translate-x-36"></div>
                <p className="text-xl">
                  Racing Wheels are bundled products that combine selected
                  Steering Wheels and Wheel Bases. The wheel base is the heart
                  of our ecosystem, combining all Fanatec peripherals to deliver
                  a seamless sim racing experience. When building a Fanatec
                  simulator setup, we recommend selecting a Racing Wheel or
                  Wheel Base first.
                </p>
              </div>
            </div>
          </div>
        </>
      )}

      <PaginatedContent
        data={productData}
        filter={"Wheel Bases"}
        routerLink={"wheel-bases"}
      ></PaginatedContent>
    </div>
  );
};
export default WheelBases;
