import React from "react";
import { NavLink } from "react-router-dom";
function Navbar() {
  return (
    <>
      <div className="row nbar pt-4 gx-0 ">
        <ul className="d-flex justify-content-around ">
          <li>
            <NavLink to="/categories/art">
              <h5 className="fs-5  ">Art</h5>
            </NavLink>
          </li>
          <li>
            <NavLink to="/categories/crafts">
              <h5  className="fs-5  ">Crafts</h5>
            </NavLink>
          </li>
          <li>
            <NavLink to="/categories/dance">
              <h5 className="fs-5  ">Dance</h5>
            </NavLink>
          </li>
          <li>
            <NavLink to="/categories/film">
              <h5 className="fs-5  ">Film</h5>
            </NavLink>
          </li>
          <li>
            <NavLink to="/categories/music">
              <h5 className="fs-5  ">Music</h5>
            </NavLink>
          </li>
          <li>
            <NavLink to="/categories/technology">
              <h5 className="fs-5  fw-lighter">Technology</h5>
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
