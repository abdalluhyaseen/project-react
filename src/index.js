import React from "react";
import ReactDOM from "react-dom/client";
import About from "./componid/aboutuspage/Aboutus";
import Contact from "./componid/contactUspage/contactUs";
import Login from "./componid/login/login";
import Home from "./App";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/b",
    element: <About />,
  },
  {
    path: "/c",
    element: <Contact />,
  },
  {
    path: "/Log",
    element: <Login />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
