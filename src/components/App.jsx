import React, { useEffect } from 'react';
import Navigation from './Navigation/Navigation';
import { Route, Routes } from 'react-router-dom';
import HomePage from 'pages/HomePage/HomePage';
import ContactPage from 'pages/ContactPage/ContactPage';
import RegisterPage from 'pages/RegisterPage/RegisterPage';
import LoginPage from 'pages/LoginPage/LoginPage';
import { useDispatch } from 'react-redux';
import { current } from 'redux/auth/operations';
import PrivateRoute from './Routes/PrivateRoute';
import PublicRoute from './Routes/PublicRoute';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(current());
  }, [dispatch]);
  return (
    <>
      <Navigation />
      <Routes>
        <Route element={<HomePage />} path="/"></Route>
        <Route
          element={
            <PublicRoute>
              <RegisterPage />
            </PublicRoute>
          }
          path="/register"
        ></Route>
        <Route
          element={
            <PublicRoute>
              <LoginPage />
            </PublicRoute>
          }
          path="/login"
        ></Route>
        <Route
          element={
            <PrivateRoute>
              <ContactPage />
            </PrivateRoute>
          }
          path="/contacts"
        ></Route>
      </Routes>
    </>
  );
};

export default App;
