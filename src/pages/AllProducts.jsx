import { useEffect } from "react";
// Import Data
import { productData } from "../assets/SampleData";
// Import Responsive
import { useMediaQuery } from "react-responsive";
// Import Chakra

import PaginatedContent from "../components/PaginatedContent";

const AllProducts = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 720px)" });
  return (
    <div className="bg-white pb-10">
      {isTabletOrMobile ? (
        <>
          <div className="w-full h-[120vw] relative">
            <div className="w-full h-full relative overflow-hidden">
              <img
                src="https://fanatec.com/media/image/04/6d/56/Ready_to_Race_mob_800x800.jpg"
                alt=""
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute -translate-x-1/2 top-1/2 left-1/2  w-[350px] text-gray-300">
                <h1 className="text-5xl font-medium text-center">
                  READY TO RACE
                </h1>
                <div className="w-20  h-1 bg-red-600 blur-[1px] my-7 mx-auto"></div>
                <p className="text-xl text-center">
                  Our 'Ready to Race' bundles contain at least a Steering Wheel,
                  a Wheel Base, and Pedals - the core components you need to
                  start sim racing.
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
                src="https://fanatec.com/media/image/c1/4f/c3/Ready_to_Race_left_offset_1920x1920.jpg"
                alt=""
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute top-[40%] 2xl:top-[30%] left-[50vw] 2xl:left-[60vw] w-[350px] 2xl:w-[450px] text-gray-300">
                <h1 className="text-5xl font-medium">READY TO RACE</h1>
                <div className="md:w-36 2xl:w-72 h-1 bg-red-600 blur-[1px] my-7 2xl:-translate-x-36"></div>
                <p className="text-xl">
                  Our 'Ready to Race' bundles contain at least a Steering Wheel,
                  a Wheel Base, and Pedals - the core components you need to
                  start sim racing.
                </p>
              </div>
            </div>
          </div>
        </>
      )}
      <div className="bg-stone-200 max-h-[645x] w-full px-4 pb-10">
        <h2 className="uppercase text-2xl font-semibold pt-10 text-center">
          Are you ready?
        </h2>
        <div className="w-20 h-1 bg-red-600 blur-[1px] mt-4 mb-10 mx-auto"></div>
        <div className="max-w-[840px] mx-auto text-center">
          {" "}
          <p>
            The setup is simple: the Steering Wheel connects directly to the
            Wheel Base via the included quick release, and the Pedals also
            connect directly to the Wheel Base using the included cable. All
            other required cables are also included.
          </p>
          <br />
          <p>
            Note: Fanatec products perform at their best when hard-mounted to a
            racing rig or wheel stand, which means that not all 'Ready to Race'
            bundles include a table clamp for the Wheel Base. Check the 'What's
            Included' section of each bundle page for details.
          </p>
        </div>
      </div>
      <PaginatedContent data={productData}></PaginatedContent>
    </div>
  );
};
export default AllProducts;
