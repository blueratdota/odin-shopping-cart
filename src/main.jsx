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

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home to="/home" replace /> },
      { path: "steering-wheels", element: <SteeringWheels /> },
      { path: "pedals", element: <Pedals /> },
      { path: "pedals/:id", element: <Product /> }
    ]
  },
  {
    path: "home",
    element: <Home />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
