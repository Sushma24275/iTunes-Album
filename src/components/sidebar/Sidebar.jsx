import React from "react";
import "./Sidebar.scss";
import { menuItems } from "./sidebar.utils";
function Sidebar() {
  return (
    <div className="sidebar">
      {menuItems.map((item) => {
        return <p>{item?.name}</p>;
      })}
    </div>
  );
}

export default Sidebar;
