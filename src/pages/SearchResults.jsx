import {
  useLocation,
  useOutletContext,
  useParams,
  useSearchParams
} from "react-router-dom";
import { useEffect, useMemo } from "react";

import PaginatedContent from "../components/PaginatedContent";

const SearchResults = ({}) => {
  const query = useParams().id;
  const allProducts = useOutletContext().allProducts;
  console.log(query);

  const filteredItems = useMemo(() => {
    return allProducts.filter((item) => {
      return item.name.toLowerCase().includes(query.toLowerCase());
    });
  }, [query]);

  return (
    <div className="bg-white py-10">
      <h2 className="text-center text-3xl font-semibold">
        {`Showing search results for "${query}"`}{" "}
      </h2>
      <PaginatedContent data={filteredItems}></PaginatedContent>
    </div>
  );
};
export default SearchResults;
