import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getIsLoggedIn } from 'redux/auth/selectors';

const PublicRoute = ({ children }) => {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return !isLoggedIn ? children : <Navigate to="/contacts" />;
};

export default PublicRoute;
