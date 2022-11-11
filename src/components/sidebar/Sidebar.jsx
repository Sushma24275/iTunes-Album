import React, { useEffect, useState } from "react";
import "./Sidebar.scss";
import { NavLink } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { BsFillHeartFill } from "react-icons/bs";
import { BiCategoryAlt } from "react-icons/bi";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

function Sidebar() {
  return (
    <div className="sidebar-container">
      <ul>
        <li>
          <AiFillHome />
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <BsFillHeartFill />
          <NavLink to="/favourites">Favourites</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
