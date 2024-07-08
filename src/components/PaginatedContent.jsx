import { useState } from "react";
// Product Card
import ProductCard from "./ProductCard";
// Import Pagination
import { MenuItem, Select, Pagination, Button } from "@mui/material";
// Import Chakra
import { TriangleDownIcon } from "@chakra-ui/icons";
import { useSearchParams } from "react-router-dom";
const PaginatedContent = ({ data, filter, routerLink }) => {
  const localData = data;
  const [searchParams, setSearchParams] = useSearchParams({
    currPage: 1,
    cardPerPage: 6,
    sortAsc: true,
    sortType: "name"
  });
  const currPage = searchParams.get("currPage");
  const cardPerPage = searchParams.get("cardPerPage");
  const sortAsc = searchParams.get("sortAsc") === "true";
  const sortType = searchParams.get("sortType");

  const handlePageChange = (e, page) => {
    setSearchParams(
      (prev) => {
        prev.set("currPage", page);
        return prev;
      },
      { replace: true }
    );
    window.scrollTo(0, 0);
  };

  const handlesetCardPerPage = (e) => {
    setSearchParams(
      (prev) => {
        prev.set("cardPerPage", e.target.value);
        return prev;
      },
      { replace: true }
    );
  };

  const handleSort = () => {
    // console.log(sortAsc);
    setSearchParams(
      (prev) => {
        prev.set("sortAsc", !sortAsc);
        return prev;
      },
      { replace: true }
    );
  };

  const handleSetSortType = (e) => {
    setSearchParams(
      (prev) => {
        prev.set("sortType", e.target.value);
        return prev;
      },
      { replace: true }
    );
  };

  // get current posts and sorting
  const filteredData = (() => {
    if (filter) {
      return data.filter((item) => {
        return item.category == filter;
      });
    }
    return data;
  })();
  const indexOfLastPost = currPage * cardPerPage;
  const indexOfFirstPost = indexOfLastPost - cardPerPage;
  const sortedPost = filteredData.sort(function (a, b) {
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
              {filteredData.length > 6 ? (
                <MenuItem value={12}>12</MenuItem>
              ) : null}
              {filteredData.length > 12 ? (
                <MenuItem value={18}>18</MenuItem>
              ) : null}
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
            return (
              <ProductCard key={data.id} data={data} routerLink={routerLink} />
            );
          })}
        </div>
      </div>
      <Pagination
        count={Math.ceil(filteredData.length / cardPerPage)}
        className="flex justify-center pt-6 "
        onChange={handlePageChange}
        page={Number(currPage)}
      ></Pagination>
    </div>
  );
};
export default PaginatedContent;
