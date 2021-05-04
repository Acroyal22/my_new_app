import React from "react";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <>
      <nav class="container-fluid">
        <div></div>
        <ul>
          <li>
            <Link  to="/">
              HOME
            </Link>
          </li>
          <li>
            <Link  to="/business">
              BUSINESS
            </Link>
          </li>
          <li>
            <Link to="/politics">
              POLITICS
            </Link>
          </li>
          <li>
            <Link to="/sport">
              SPORT
            </Link>
          </li>
          <li>
            <Link to="/tech">
              TECH
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
export default Nav;
