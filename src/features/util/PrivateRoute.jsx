import React from "react";
import { Navigate, Route } from "react-router-dom";

function PrivateRoute({ children, path, exact }) {
  return (
    <Route
      exact={exact}
      path={path}
      render={({ location }) => (
        <Navigate
          to={{
            pathname: "/",
            state: { from: location },
          }}
        />
      )}
    />
  );
}

export default PrivateRoute;
