import React, { useContext} from "react";
import { Link } from "react-router-dom";
import "./Home.css";
// import UserContext from "../auth/UserContext";

function Home() {
    // const { currentUser } = useContext(UserContext);
    return (
        <div className="Homepage">
            <div className="container text-center"> 
                <h1 className="jobly">JOBLY</h1>
                <p className="lead">All the jobs in one, convenient place.</p>
                {/* {currentUser ? <h2>Welcome back, {currentUser.firstName || currentUser.username}!</h2> : (

                )} */}
            </div> 
        </div>
    )
}

export default Home;