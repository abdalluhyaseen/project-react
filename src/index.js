import React from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
import About from './componid/aboutuspage/Aboutus';
import Contact from "./componid/contactUspage/contactUs";

import Home from "./App";

// import Contact from "./router/pages/contact";
// import ErrorPage from "./router/errorpage";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    // errorElement: <ErrorPage />,
  },
  {
    path: "/b",
    element: <About />,
  },
  {
    path: "/c",
    element: <Contact />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
