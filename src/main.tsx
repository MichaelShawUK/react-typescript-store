import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import Home from "./components/Home.tsx";
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
        element: <div>Mens</div>,
      },
      {
        path: "women",
        element: <div>Womens</div>,
      },
      {
        path: "junior",
        element: <div>Junior</div>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
