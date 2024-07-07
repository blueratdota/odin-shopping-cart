import { Link } from "react-router-dom";

const PopoverContent = ({ filteredItems, setQuery, setShowSearch, query }) => {
  if (query) {
    return (
      <div className={`bg-gray-200 md:w-[600px] px-1 py-1 `}>
        {filteredItems.slice(0, 5).map((item) => {
          return (
            <Link
              key={item.id}
              to={`/all-products/${item.id}`}
              className="py-2 px-2 bg-white border h-[100px] flex"
              onClick={() => {
                setShowSearch(false);
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
        {filteredItems.length > 5 ? <div>see more</div> : null}
      </div>
    );
  }
};
export default PopoverContent;
