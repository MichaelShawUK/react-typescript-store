import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App.tsx";
import Home from "./components/Home.tsx";
// import ProductRange from "./components/ProductRange.tsx";
import ProductFilter from "./components/ProductFilter.tsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
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
      // {
      //   path: "search",
      //   element: <ProductFilter category="search" />,
      // },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
