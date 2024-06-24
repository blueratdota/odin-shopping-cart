import { useState, useRef } from "react";
import { Link, Outlet } from "react-router-dom";
import { productData } from "./assets/SampleData";
//import - components
import ScrollNav from "./components/ScrollNav";
import HomeCarousel from "./components/HomeCarousel";

function App() {
  return (
    <div className="bg-gray-700">
      <ScrollNav></ScrollNav>

      <Outlet></Outlet>

      {productData.map((data) => {
        return <div>{data.id}</div>;
      })}

      <footer className="bg-red-500">some yeets</footer>
    </div>
  );
}

//this is from pc code

export default App;
