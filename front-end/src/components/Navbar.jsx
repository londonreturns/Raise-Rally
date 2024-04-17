import React from "react";
import { NavLink } from "react-router-dom";
function Navbar() {
  return (
    <>
      <div className="row bg-dark pt-4 gx-0 ">
        <ul className="d-flex justify-content-around ">
          <li>
            <NavLink to="/categories/art">
              <h5>Art</h5>
            </NavLink>
          </li>
          <li>
            <NavLink to="/categories/crafts">
              <h5>Crafts</h5>
            </NavLink>
          </li>
          <li>
            <NavLink to="/categories/dance">
              <h5>Dance</h5>
            </NavLink>
          </li>
          <li>
            <NavLink to="/categories/film">
              <h5>Film</h5>
            </NavLink>
          </li>
          <li>
            <NavLink to="/categories/music">
              <h5>Music</h5>
            </NavLink>
          </li>
          <li>
            <NavLink to="/categories/technology">
              <h5>Technology</h5>
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
