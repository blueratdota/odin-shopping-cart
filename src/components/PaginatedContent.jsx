import { useState } from "react";
// Product Card
import ProductCard from "./ProductCard";
// Import Pagination
import { MenuItem, Select, Pagination, Button } from "@mui/material";
// Import Chakra
import { TriangleDownIcon } from "@chakra-ui/icons";
const PaginatedContent = ({ data }) => {
  const localData = data;
  const [currPage, setCurrPage] = useState(1);
  const [cardPerPage, setCardPerPage] = useState(6);
  const [sortAsc, setSortAsc] = useState(true);
  const [sortType, setSortType] = useState("name");

  const handlePageChange = (e, page) => {
    setCurrPage(page);
  };

  const handlesetCardPerPage = (e) => {
    setCardPerPage(e.target.value);
  };

  const handleSort = () => {
    setSortAsc(!sortAsc);
  };

  const handleSetSortType = (e) => {
    setSortType(e.target.value);
  };

  // get current posts and sorting
  const indexOfLastPost = currPage * cardPerPage;
  const indexOfFirstPost = indexOfLastPost - cardPerPage;
  const sortedPost = data.sort(function (a, b) {
    if (sortAsc) {
      return a[sortType] > b[sortType] ? 1 : -1;
    }
    return a[sortType] > b[sortType] ? -1 : 1;
  });
  const currentPosts = sortedPost.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <div className="bg-white pt-10 pb-5 flex flex-col gap-5 max-w-[1300px] mx-auto">
      <div className=" flex justify-between items-center pb-4 mx-4">
        <label htmlFor="items-per-page">
          Items Per Page
          <div>
            <Select
              id="items-per-page"
              value={cardPerPage}
              onChange={handlesetCardPerPage}
              className="h-10 ml-4"
            >
              <MenuItem value={6}>6</MenuItem>
              <MenuItem value={12}>12</MenuItem>
              <MenuItem value={18}>18</MenuItem>
            </Select>
          </div>
        </label>
        <label htmlFor="sort-type">
          Sort By
          <div>
            <Select
              id="sort-type"
              value={sortType}
              onChange={handleSetSortType}
              className="h-10 ml-4"
            >
              <MenuItem value={"availability"}>Availability</MenuItem>
              <MenuItem value={"name"}>Name</MenuItem>
              <MenuItem value={"price"}>Price</MenuItem>
            </Select>
            <Button
              className="w-1"
              aria-label="sort"
              variant="text"
              onClick={handleSort}
            >
              <TriangleDownIcon />
            </Button>
          </div>
        </label>
      </div>

      <div className="w-full h-fit  ">
        <div className="  md:grid md:grid-cols-2 xl:grid-cols-3  md:gap-5 xl:gap-10 ">
          {currentPosts.map((data) => {
            return <ProductCard key={data.id} data={data} />;
          })}
        </div>
      </div>
      <Pagination
        count={Math.ceil(localData.length / cardPerPage)}
        className="flex justify-center pt-6 "
        onChange={handlePageChange}
      ></Pagination>
    </div>
  );
};
export default PaginatedContent;
