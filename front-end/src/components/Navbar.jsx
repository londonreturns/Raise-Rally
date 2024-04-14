import React from 'react'
import { Link,NavLink } from "react-router-dom";
function Navbar() {
  return (
    <>
          <div className="row bg-dark p-2 pt-4 ">
        <nav>
          <ul className="d-flex justify-content-around">
            <li>
              <NavLink to="/category/cat1">
              <h5 >Cat1</h5></NavLink>
            </li>
            <li>
              <NavLink to="/category/cat2">
              <h5>Cat2</h5></NavLink>
            </li>
            <li>
              <NavLink to="/category/cat3">
              <h5>Cat3</h5></NavLink>
            </li>
            <li>
              <NavLink to="/category/cat4">
              <h5>Cat4</h5></NavLink>
            </li>
            <li>
              <NavLink to="/category/cat5">
              <h5>Cat5</h5></NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </>
  )
}

export default Navbar
