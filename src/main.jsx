import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
//pages
import Home from "./pages/Home.jsx";
import Pedals from "./pages/Pedals.jsx";
import SteeringWheels from "./pages/SteeringWheels.jsx";
import Product from "./pages/Product.jsx";
import WheelBases from "./pages/WheelBases.jsx";
import AllProducts from "./pages/AllProducts.jsx";
import Accessories from "./pages/Accessories.jsx";
import Shifters from "./pages/Shifters.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home to="/home" replace /> },
      { path: "all-products", element: <AllProducts /> },
      { path: "wheel-bases", element: <WheelBases /> },
      { path: "wheel-bases/:id", element: <Product /> },
      { path: "steering-wheels", element: <SteeringWheels /> },
      { path: "steering-wheels/:id", element: <Product /> },
      { path: "pedals", element: <Shifters /> },
      { path: "pedals/:id", element: <Product /> },
      { path: "shifters/others", element: <Pedals /> },
      { path: "shifters/others/:id", element: <Product /> },
      { path: "accessories", element: <Accessories /> },
      { path: "accessories/:id", element: <Product /> }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
