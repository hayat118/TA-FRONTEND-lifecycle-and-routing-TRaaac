import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./component/app";

let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// import { createBrowserRouter, RouterProvider } from "react-router-dom";

// import App from "./component/app";
// import Topstar from "./component/topstar";
// import Battle from "./component/battle";
// import Header from "./component/header";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Topstar />,
//   },
//   {
//     path: "/battle",
//     element: <Battle />,
//   },
// ]);

// let root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <div>
//     <Header />
//     <RouterProvider router={router} />
//   </div>
// );
