import { useState } from "react";
// Import Data
import {
  productData,
  bannerPhotos,
  smBannerPhotos
} from "../assets/SampleData";
// Import Responsive
import { useMediaQuery } from "react-responsive";
import TopSellerCard from "../components/TopSellerCard";
import ProductCard from "../components/ProductCard";
// Import Pagination
import { MenuItem, Select, Pagination, Button } from "@mui/material";
// Import Chakra
import { TriangleDownIcon } from "@chakra-ui/icons";

const AllProducts = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 720px)" });
  const isBigScreen = useMediaQuery({ query: "(min-width: 1270px)" });

  const [currPage, setCurrPage] = useState(1);
  const [cardPerPage, setCardPerPage] = useState(6);
  const [sortAsc, setSortAsc] = useState(true);

  const handlePageChange = (e, page) => {
    setCurrPage(page);
  };

  const handlesetCardPerPage = (e) => {
    setCardPerPage(e.target.value);
  };

  const handleSort = () => {
    setSortAsc(!sortAsc);
  };

  // get current posts and sorting
  const indexOfLastPost = currPage * cardPerPage;
  const indexOfFirstPost = indexOfLastPost - cardPerPage;
  const sortedPost = productData.sort(function (a, b) {
    if (sortAsc) {
      return a.name > b.name ? 1 : -1;
    }
    return a.name > b.name ? -1 : 1;
  });
  const currentPosts = sortedPost.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <div>
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
          <div className="bg-white pt-10 pb-5 flex flex-col gap-5">
            <div className=" flex justify-between items-center pb-4 mx-4">
              <label htmlFor="items-per-page">
                Items Per Page
                <Select
                  id="items-per-page"
                  value={cardPerPage}
                  onChange={handlesetCardPerPage}
                  className="h-10 ml-4"
                >
                  <MenuItem value={4}>4</MenuItem>
                  <MenuItem value={6}>6</MenuItem>
                  <MenuItem value={8}>8</MenuItem>
                </Select>
              </label>
              <label htmlFor="">
                Sort Alphabetically
                <Button
                  className="w-1"
                  aria-label="sort"
                  variant="text"
                  onClick={handleSort}
                >
                  <TriangleDownIcon />
                </Button>
              </label>
            </div>

            {currentPosts.map((data) => {
              return <ProductCard key={data.id} data={data} />;
            })}
            <Pagination
              count={Math.ceil(productData.length / cardPerPage)}
              className="flex justify-center pt-6 "
              onChange={handlePageChange}
            ></Pagination>
          </div>
        </>
      ) : (
        <div>tablet</div>
      )}
    </div>
  );
};
export default AllProducts;
