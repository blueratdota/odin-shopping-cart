import { Link, useNavigate } from "react-router-dom";
import PaginatedContent from "./PaginatedContent";
import numeral from "numeral";

const PopoverContent = ({ filteredItems, setQuery, setShowSearch, query }) => {
  const navigate = useNavigate();
  if (query) {
    return (
      <div className={`bg-gray-200 md:w-[500px] px-1 `}>
        {filteredItems.slice(0, 5).map((item) => {
          return (
            <Link
              key={item.id}
              to={`/all-products/${item.id}`}
              className="py-2 px-2 bg-white border h-[100px] flex gap-2"
              onClick={() => {
                setShowSearch(false);
                setQuery("");
                window.scrollTo(0, 0);
              }}
            >
              <div className="h-full w-[100px]">
                <img
                  src={item.thumbnail}
                  alt={item.name}
                  className="h-full object-contain"
                />
              </div>
              <div className="">
                <p className="truncate font-semibold text-lg">{item.name}</p>
                <p className="text-emerald-500">
                  ¥ {numeral(item.price).format("0,0")}
                </p>
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
            <div className="py-2 ml-5 font-medium text-lg underline">
              {" "}
              Show all results...{" "}
            </div>
          </Link>
        ) : null}
      </div>
    );
  }
};
export default PopoverContent;
