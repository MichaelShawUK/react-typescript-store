import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App.tsx";
import Home from "./components/Home.tsx";
// import ProductListing from "./components/ProductListing.tsx";
import ProductRange from "./components/ProductRange.tsx";

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
        element: <ProductRange category="men" />,
      },
      {
        path: "women",
        element: <ProductRange category="women" />,
      },
      {
        path: "junior",
        element: <ProductRange category="junior" />,
      },
      {
        path: "search",
        element: <ProductRange category="search" />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
