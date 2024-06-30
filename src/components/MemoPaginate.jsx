import { useMemo, useState } from "react";
// Product Card
import ProductCard from "./ProductCard";
// Import Pagination
import { MenuItem, Select, Pagination, Button } from "@mui/material";
// Import Chakra
import { TriangleDownIcon } from "@chakra-ui/icons";
const MemoPaginate = ({ data }) => {
  const localData = data;
  const [currPage, setCurrPage] = useState(1);
  const [cardPerPage, setCardPerPage] = useState(6);
  const [sortAsc, setSortAsc] = useState(true);
  const [sortType, setSortType] = useState("name");
  const sortByPrice = useMemo(() => {
    const ascOrder = localData.sort(function (a, b) {
      return a.availability > b.availability ? 1 : -1;
    });
    const descOrder = localData.sort(function (a, b) {
      return a.availability > b.availability ? -1 : 1;
    });
    if (sortAsc) return ascOrder;
    else return descOrder;
  }, [sortAsc]);

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
  const currentPosts = sortByPrice.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <div className="bg-white pt-10 pb-5 flex flex-col gap-5">
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
              <MenuItem value={4}>4</MenuItem>
              <MenuItem value={6}>6</MenuItem>
              <MenuItem value={8}>8</MenuItem>
            </Select>
          </div>
        </label>
        <label htmlFor="sort-type">
          Sort By
          <div>
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

      {currentPosts.map((data) => {
        return <ProductCard key={data.id} data={data} />;
      })}
      <Pagination
        count={Math.ceil(sortByPrice.length / cardPerPage)}
        className="flex justify-center pt-6 "
        onChange={handlePageChange}
      ></Pagination>
    </div>
  );
};
export default MemoPaginate;
