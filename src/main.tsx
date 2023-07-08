import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App.tsx";
import Home from "./components/Home.tsx";
import ProductFilter from "./components/ProductFilter.tsx";
import ProductPage from "./components/ProductPage.tsx";
import Basket from "./components/Basket.tsx";
import Error from "./components/Error.tsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "men",
        element: <ProductFilter category="men" />,
      },
      {
        path: "women",
        element: <ProductFilter category="women" />,
      },
      {
        path: "junior",
        element: <ProductFilter category="junior" />,
      },
      {
        path: "search",
        element: <ProductFilter category="" />,
      },
      {
        path: "basket",
        element: <Basket />,
      },
      {
        path: "product/:productId",
        element: <ProductPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
