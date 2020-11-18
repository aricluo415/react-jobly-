import React, { useContext} from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import UserContext from "./auth/UserContext";

function Home() {
    //const { currentUser } = useContext(UserContext);
    return <h1>Home</h1>
    // return (
    //     <div className="Homepage">
    //         <div className="container text-center"> 
    //             <h1 className="mb-4 font-weight=bold">Jobly</h1>
    //             <p className="lead">All the jobs in one, convenient place.</p>
    //             {currentUser ? <h2>Welcome back, {currentUser.firstName || currentUser.username}!</h2> : (
    //                 <p>
    //                     <Link className="btn btn-primary font-weight-bold mr-3" to="/login">Log in</Link>
    //                     <Link className="btn btn-primary font-weight-bold mr-3" to="/register">Sign up</Link>
    //                 </p>
    //             )}
    //         </div> 
    //     </div>
    // )
}

export default Home;