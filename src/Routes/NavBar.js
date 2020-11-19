import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import UserContext from "../api/UserContext";
import "./NavBar.css";

function NavBar({ logout }) {
  const { currentUser } = useContext(UserContext);

  // if logged in
  if (currentUser) {
    return (
      <div className="Navbar">
        <nav>
          <NavLink className="nav-link" to="/jobs">
            Jobs
          </NavLink>
          <NavLink className="nav-link" to="/companies">
            Companies
          </NavLink>
          <NavLink className="nav-link" to="/profile">
            Profile
          </NavLink>
          <NavLink className="nav-link" to="/home">
            Home
          </NavLink>
          <NavLink className="nav-link" to="/" onClick={logout}>
            logout
          </NavLink>
        </nav>
      </div>
    );
  }
  return (
    <div className="Navbar">
      <nav>
        <NavLink className="nav-link" to="/login">
          Login
        </NavLink>
        <NavLink className="nav-link" to="/signup">
          Register
        </NavLink>
      </nav>
    </div>
  );
}
export default NavBar;
