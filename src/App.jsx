import { useState, useRef, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import { productData } from "./assets/SampleData";
//import - components
import ScrollNav from "./components/ScrollNav";
import HomeCarousel from "./components/HomeCarousel";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-gray-800">
      <ScrollNav></ScrollNav>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
}

//this is from pc code

export default App;
