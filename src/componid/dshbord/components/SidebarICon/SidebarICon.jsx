import React, { useState } from 'react';
import { AiOutlineHome } from "react-icons/ai";
import { FaRegEdit } from "react-icons/fa"; 
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { Link } from "react-router-dom";
import "./SidebarICon.css"

const SidebarICon = () => {
  const [activeItem, setActiveItem] = useState("home"); 
  const handleItemClick = (item) => {
    setActiveItem(item);
  }

  return (
    <div className="d-flex py-3 px-2 flex-column justify-content-between  h-100">
      <div className="d-flex flex-column align-items-center ">
        <div
          className={`sidebar-head-icon bg-success d-flex flex-fill fs-3 p-2 rounded-3 my-3 `}
        >
          <MdOutlineSpaceDashboard />
        </div>
        <span className="span-between-icon rounded-5 d-flex flex-fill w-75"></span>
        <Link to="/dash">
          <div
            className={`sidebar-icon d-flex flex-fill fs-3 p-2 rounded-3 my-3 ${
              activeItem === "home" ? "active" : ""
            }`}
            onClick={() => handleItemClick("home")}
          >
            <AiOutlineHome />
          </div>
        </Link>
        <Link to="/add">
          <div
            className={`sidebar-icon d-flex flex-fill fs-3 p-2 rounded-3 my-3 ${
              activeItem === "add" ? "active" : ""
            }`}
            onClick={() => handleItemClick("add")}
          >
            <FaRegEdit />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default SidebarICon;