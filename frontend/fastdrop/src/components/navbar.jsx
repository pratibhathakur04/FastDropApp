import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const ActiveClass = ({ isActive }) =>
    isActive ? "text-secondary font-semibold" : "hover:text-green-500";

  return (
    <nav className="bg-light text-primary p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold  text-red-400">FastDrop</div>
        <ul className="flex space-x-4">
          <li>
            <NavLink to="/" className={ActiveClass}>
              Home
            </NavLink>
            </li>
            <li>
            <NavLink to="/catalog" className={ActiveClass}>
              Catalog
            </NavLink>
          </li>
       
          
          <li>
            <NavLink to="/login" className={ActiveClass}>
              Login
            </NavLink>
          </li>
          
          <li>
            <NavLink to="/logout" className={ActiveClass}>
              Logout
            </NavLink>
          </li>

           
          <li>
            <NavLink to="/About" className={ActiveClass}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/profile" className={ActiveClass}>
              Profile
            </NavLink>
          </li>
          <li>
            <NavLink to="/cart" className={ActiveClass}>
              cart
            </NavLink>
          </li>
          <li>
            <NavLink to="/tracking" className={ActiveClass}>
             Order Tracking
            </NavLink>
          </li>
          <li>
            <NavLink to="/checkout" className={ActiveClass}>
            checkout
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
