import React, {useContext} from 'react';
import { Link, NavLink, useHistory} from 'react-router-dom'
import UserContext from "./auth/UserContext";
import "./NavBar.css";
function NavBar({logout}) {

    const history = useHistory();
    // Logout
    function handleLogout() {
        logout();
        history.push('/')
    }
    // if logged in
    if (localStorage.token) {
        return <div className="Navbar">
                <nav className="navbar-nav ml-auto">
                    <NavLink className="nav-link" to="/jobs">Jobs</NavLink>
                    <NavLink className="nav-link" to="/companies">Companies</NavLink>
                    <NavLink className="nav-link" to="/profile">Profile</NavLink>
                    <NavLink className="nav-link" to="/home" >Home</NavLink>
                    <button onClick={handleLogout}>Logout</button>
                </nav>
            </div>;
    } // not logged in
    else {
        return <div className="Navbar">
                <nav className="navbar-nav ml-auto">
                    <NavLink className="nav-link" to="/login">Login</NavLink>
                    <NavLink className="nav-link" to="/signup">Register</NavLink>
                </nav>
            </div>;
    }
}


export default NavBar;
