import { useState, useRef, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import { productData } from "./assets/SampleData";
//import - components
import ScrollNav from "./components/ScrollNav";
import HomeCarousel from "./components/HomeCarousel";
import Footer from "./components/Footer";

function App() {
  const [allProducts, setAllProducts] = useState(() => {
    const localValue = localStorage.getItem("allProducts");
    if (localValue == null) return productData;
    return JSON.parse(localValue);
  });
  const [inCart, setInCart] = useState(() => {
    const localValue = localStorage.getItem("inCart");
    if (localValue == null) return [];
    return JSON.parse(localValue);
  });

  useEffect(() => {
    localStorage.setItem("allProducts", JSON.stringify(allProducts));
    localStorage.setItem("inCart", JSON.stringify(inCart));
  }, [allProducts, inCart]);

  // console.log(allProducts);
  return (
    <div className="bg-gray-800">
      <ScrollNav
        inCart={inCart}
        setInCart={setInCart}
        allProducts={allProducts}
      ></ScrollNav>
      <Outlet
        context={{
          allProducts: allProducts,
          inCart: inCart,
          setInCart: setInCart
        }}
      ></Outlet>
      <Footer></Footer>
    </div>
  );
}

//this is from pc code

export default App;
