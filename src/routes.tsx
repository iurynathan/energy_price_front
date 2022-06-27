import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Signin from "./Pages/Signin";
import ProtectedRoutes from "./ProtectRoute";

function RouterComponent() {
  return (
    <Routes>
      <Route element={<ProtectedRoutes />}>
        <Route path="/" element={<Home />} />
      </Route>
      <Route path="/signin" element={<Signin />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default RouterComponent;
