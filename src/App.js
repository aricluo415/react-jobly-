import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "./Routes/Router";
import useLocalStorage from "./hooks/useLocalStorage";
import JoblyApi from "./api/api";
import UserContext from "./api/UserContext";
import NavBar from "./Routes/NavBar";
import jwt from "jsonwebtoken";
import "./App.css";

function App() {
  const [token, setToken] = useLocalStorage("token");
  const [currentUser, setCurrentUser] = useState(null);
  const [appliedApps, setAppliedApps] = useState(null);
  const [isLoading, setLoading] = useState(true);

  //const UserContext = useContext(UserContext);

  useEffect(
    function fetchUserOnLogin() {
      async function fetchUser() {
        if (token) {
          JoblyApi.token = token;
          const { username } = jwt.decode(token);
          const { user } = await JoblyApi.getUser(username);
          const applications = user.applications;
          setAppliedApps(applications);
          setCurrentUser({ user });
        }
        setLoading(false);
      }
      fetchUser();
    },
    [token]
  );

  /** Set Auth token when logged in */
  async function login(userInfo) {
    console.log("hello loggin in");
    const token = await JoblyApi.userLogin(userInfo);
    setToken(token);
  }
  /** Remove Auth Token when logging out */
  function logOut() {
    setToken(null);
    setCurrentUser(null);
  }
  /** Sign up */
  async function signUp(userInfo) {
    await JoblyApi.userSignUp(userInfo);
  }

  async function applyForApp(jobId) {
    const res = await JoblyApi.applyForJob(currentUser.user.username, jobId);
    setAppliedApps((apps) => [...apps, res.applied]);
  }
  /** Loading or will return to /home on refresh automatically even if logged in*/
  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="App">
      <BrowserRouter>
        <UserContext.Provider
          value={{ currentUser, setCurrentUser, appliedApps, applyForApp }}
        >
          <NavBar logout={logOut} />
          <Router login={login} logOut={logOut} signUp={signUp} />
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
