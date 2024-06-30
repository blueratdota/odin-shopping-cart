import {
  productData,
  bannerPhotos,
  smBannerPhotos
} from "../assets/SampleData";
// Import Responsive
import { useMediaQuery } from "react-responsive";
import TopSellerCard from "../components/TopSellerCard";
import ProductCard from "../components/ProductCard";

const AllProducts = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 720px)" });
  const isBigScreen = useMediaQuery({ query: "(min-width: 1270px)" });
  return (
    <div>
      {isTabletOrMobile ? (
        <>
          <div className="bg-blue-200 w-full h-[120vw]">
            <div className="w-full h-full relative overflow-hidden">
              <img
                src="https://fanatec.com/media/image/04/6d/56/Ready_to_Race_mob_800x800.jpg"
                alt=""
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
          <div className="bg-stone-200 max-h-[645x] w-full p-4">
            <h2 className="uppercase">Are you ready?</h2>

            <p>
              The setup is simple: the Steering Wheel connects directly to the
              Wheel Base via the included quick release, and the Pedals also
              connect directly to the Wheel Base using the included cable. All
              other required cables are also included.
            </p>
            <br />
            <p>
              Note: Fanatec products perform at their best when hard-mounted to
              a racing rig or wheel stand, which means that not all 'Ready to
              Race' bundles include a table clamp for the Wheel Base. Check the
              'What's Included' section of each bundle page for details.
            </p>
          </div>
          <div className="bg-white pt-10 flex flex-col gap-5">
            {productData.map((data) => {
              return <ProductCard key={data.id} data={data} />;
            })}
          </div>
        </>
      ) : (
        <div>tablet</div>
      )}
    </div>
  );
};
export default AllProducts;
