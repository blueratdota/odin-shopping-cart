import { useState } from "react";
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
          <div className="w-full h-[120vw]">
            <div className="w-full h-full relative overflow-hidden">
              <img
                src="https://fanatec.com/media/image/04/6d/56/Ready_to_Race_mob_800x800.jpg"
                alt=""
                className="w-full h-full object-cover object-top"
              />
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
            </div>
          </div>
        </>
      )}
      <div className="bg-stone-200 max-h-[645x] w-full p-4">
        <h2 className="uppercase">Are you ready?</h2>

        <p>
          The setup is simple: the Steering Wheel connects directly to the Wheel
          Base via the included quick release, and the Pedals also connect
          directly to the Wheel Base using the included cable. All other
          required cables are also included.
        </p>
        <br />
        <p>
          Note: Fanatec products perform at their best when hard-mounted to a
          racing rig or wheel stand, which means that not all 'Ready to Race'
          bundles include a table clamp for the Wheel Base. Check the 'What's
          Included' section of each bundle page for details.
        </p>
      </div>
      <PaginatedContent data={productData}></PaginatedContent>
    </div>
  );
};
export default AllProducts;
