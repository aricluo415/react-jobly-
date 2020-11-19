import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import UserContext from "../api/UserContext";

function ProtectedRoute({ exact, path, component }) {
  const { currentUser } = useContext(UserContext);

  if (!currentUser) {
    return <Redirect to="/home" />;
  }
  return (
    <Route exact={exact} path={path}>
      {component}
    </Route>
  );
}

export default ProtectedRoute;
