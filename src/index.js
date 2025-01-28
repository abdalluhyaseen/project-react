import React from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from './App';

import Home from "./App";
import About from "./componid/aboutPage/about";
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

]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
