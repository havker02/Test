import React from "react";
import {NavLink} from "react-router";

const Navbar =()=>{
  return (
    <header className="bg-slate-700 flex justify-between items-center text-white px-2 h-14">
      <div>
        <NavLink to="/shop">Boozy Barrel</NavLink>
      </div>
      <nav>
        <ul className="flex gap-3">
          <li>
            <NavLink to="/shop">Home</NavLink>
          </li>
          <li>
            <NavLink to="/cart">Cart</NavLink>
          </li>
          <li>
            <NavLink to="/profile">Profile</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
};

export default Navbar;