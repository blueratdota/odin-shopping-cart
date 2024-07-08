import { Link, useNavigate } from "react-router-dom";
import PaginatedContent from "./PaginatedContent";

const PopoverContent = ({ filteredItems, setQuery, setShowSearch, query }) => {
  const navigate = useNavigate();
  if (query) {
    return (
      <div className={`bg-gray-200 md:w-[600px] px-1 `}>
        {filteredItems.slice(0, 5).map((item) => {
          return (
            <Link
              key={item.id}
              to={`/all-products/${item.id}`}
              className="py-2 px-2 bg-white border h-[100px] flex"
              onClick={() => {
                setShowSearch(false);
                setQuery("");
                window.scrollTo(0, 0);
              }}
            >
              <div className="h-full">
                <img
                  src={item.thumbnail}
                  alt={item.name}
                  className="h-full object-contain"
                />
              </div>
              <div className="ml-2">
                <p className="truncate">{item.name}</p>
                <p>{item.price}</p>
              </div>
            </Link>
          );
        })}
        {filteredItems.length > 5 ? (
          <Link
            to={`/search-results/${query}`}
            state={filteredItems}
            onClick={() => {
              window.scrollTo(0, 0);
              setShowSearch(false);
              setQuery("");
            }}
          >
            <div className="bg-blue-400 py-2"> see more </div>
          </Link>
        ) : null}
      </div>
    );
  }
};
export default PopoverContent;
