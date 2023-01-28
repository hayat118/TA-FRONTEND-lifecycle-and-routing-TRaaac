import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./component/app";
import Article from "./component/article";
import Book from "./component/book";
import People from "./component/people";
import Header from "./component/header";
import "./styles/index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/article",
    element: <Article />,
  },
  {
    path: "/book",
    element: <Book />,
  },
  {
    path: "/people",
    element: <People />,
  },
]);
let root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <div>
    <Header />
    <RouterProvider router={router} />
  </div>
);
