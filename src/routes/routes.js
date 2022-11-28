import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AllAdvertise from "../pages/dashboard/AllAdvertise/AllAdvertise";
import Dashboard from "../pages/dashboard/dashboard";
import PostingAds from "../pages/dashboard/PostingAds/PostingAds";

import AdvertiseInfo from "../pages/dashboard/advertiseInfo/Advertise";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";

const AppRoutes = () => {
  const isLogin = !!localStorage.getItem("my-auth-token");

  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route
            path="/"
            element={!isLogin ? <Navigate to="/login" /> : <Dashboard />}>
              <Route path="/" element={!isLogin ? <Navigate to="/login" /> : <Navigate to="/home" />}/>
              <Route path="home" element={!isLogin ? <Navigate to="/login" /> : <AllAdvertise />}/>
              <Route path="PostingAds" element={!isLogin ? <Navigate to="/login" /> : <PostingAds />}/>
              <Route path="advertis/:adsId" element={!isLogin ? <Navigate to="/login" /> : <AdvertiseInfo  />}/>
          </Route>


          <Route
            path="/login"
            element={isLogin ? <Navigate to="/Home" /> : <Login />}
          />
          <Route
            path="/register"
            element={isLogin ? <Navigate to="/Home" /> : <Register />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRoutes;