
import React, {useState} from 'react'

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import NavBar from './NavBar';
import SignupForm from './SignupForm';
import Home from './Home';
import LoginForm from './LoginForm';
import CompanyDetails from './CompanyDetails'
import CompanyList from './CompanyList';
import Profile from './Profile';
import JobsList from './JobsList';

function Router() {

    const [token, setToken] = useState("");
    /** Set Auth token when logged in */
    function setAuthToken(newToken) {
        localStorage.setItem('token', newToken);
        console.log("hello loggin in")
        setToken(newToken);
    }
    /** Remove Auth Token when logging out */
    function removeAuthToken() {
        localStorage.removeItem('token');
        setToken("");
    }

    return (
        <div>
            <BrowserRouter>
            <NavBar logout={removeAuthToken}/>
            <Switch>
                <Route exact path="/login"><LoginForm setAuthToken={setAuthToken} token={token}/></Route>
                <Route exact path="/signup"><SignupForm /></Route>
                <Route exact path="/home"><Home /></Route>
                <Route exact path="/companies/:handle"><CompanyDetails /></Route>
                <Route exact path="/companies"><CompanyList /></Route>
                <Route exact path="/jobs"><JobsList /></Route>
                <Route exact path="/profile"><Profile /></Route>
                <Redirect to="/home"/>
            </Switch>
            </BrowserRouter>
        </div>
    )
}

export default Router
