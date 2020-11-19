
import React from 'react'

import {Route, Switch, Redirect } from 'react-router-dom';
import SignupForm from '../authentication/SignupForm';
import Home from '../home/Home';
import LoginForm from '../authentication/LoginForm';
import CompanyDetails from '../companies/CompanyDetails'
import CompanyList from '../companies/CompanyList';
import Profile from '../profile/Profile';
import JobsList from '../jobs/JobsList';
import ProtectedRoute from './ProtectedRoute'

function Router({login, logOut, signUp}) {

    return (
        <div>
            <Switch>
                <ProtectedRoute exact path="/companies/:handle" component={<CompanyDetails />} />
                <ProtectedRoute exact path="/companies" component={<CompanyList />} />
                <ProtectedRoute exact path="/jobs" component={<JobsList/>} />
                <ProtectedRoute exact path="/profile" component={<Profile />} />
                <Route exact path="/home"><Home /></Route>
                <Route exact path="/login"><LoginForm login={login}/></Route>
                <Route exact path="/signup"><SignupForm signUp={signUp}/></Route>
                <Redirect to="/home"/>
            </Switch>
        </div>
    )
}

export default Router;

/**
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */
