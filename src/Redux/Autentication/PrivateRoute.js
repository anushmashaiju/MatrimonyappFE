// src/components/PrivateRoute.jsx

import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { user } = useSelector(state => state.user); // Replace with your state management

  return (
    <Route
      {...rest}
      render={props =>
        user && user.isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Navigate to="/" />
        )
      }
    />
  );
};

export default PrivateRoute;
