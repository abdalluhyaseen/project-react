import React from "react";
import ReactDOM from "react-dom/client";
import About from "./componid/aboutuspage/Aboutus";
import Contact from "./componid/contactUspage/contactUs";
import Login from "./componid/login/login";
import Home from "./App";
import DAshbord from "./componid/dshbord/components/dashbord";
// import SidebarICon from "./componid/dshbord/components/SidebarICon/SidebarICon.jsx";
// import Form from "./componid/dshbord/components/form/form.jsx";
import Add from "./componid/dshbord/components/add/add";

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
  {
    path: "/dash",
    element: <DAshbord />,
  },
  {
    path: "/add",
    element: <Add />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
