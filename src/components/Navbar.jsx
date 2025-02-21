import React from "react";
import {NavLink} from "react-router";

const Navbar =()=>{
  return (
    <header className="bg-slate-700 flex justify-between items-center text-white px-2 h-14">
      <div>
        <NavLink to="/">Boozy Barrel</NavLink>
      </div>
      <nav>
        <ul className="flex gap-3">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">Cart</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
};

export default Navbar;