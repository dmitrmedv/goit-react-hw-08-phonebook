import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getIsLoggedIn } from 'redux/auth/selectors';

const PrivateRoute = ({ children }) => {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return isLoggedIn ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
