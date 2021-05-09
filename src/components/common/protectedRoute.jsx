import React from "react";
import { Route, Redirect } from "react-router-dom";
import Auth from "../../services/authService";
const ProtectedRoute = ({ component: Component, render, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (!Auth.getCurrentUser()) return <Redirect to='/login' />;
        return Component ? <Component {...props} /> : render(props);
      }}
    />
  );
};

export default ProtectedRoute;
