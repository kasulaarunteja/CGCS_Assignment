import React from "react";
import {NavLink } from "react-router-dom";
import "../App.css";

const Navbar = () => {
  return (
    <div className="Navbar">
      <NavLink>
        <img className="img" src="imgs/marvel.jpg" alt="" />
      </NavLink>
      <NavLink id="link" to={"/"}>
        Characters
      </NavLink>
      <NavLink id="link" to={"/comics"}>
        Comics
      </NavLink>
      <NavLink id="link" to={"/stories"}>
        Stories
      </NavLink>
    </div>
  );
};

export default Navbar;
