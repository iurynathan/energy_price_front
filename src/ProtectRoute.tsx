import React from "react";
import jwtDecode from "jwt-decode";
import { Navigate, Outlet } from "react-router-dom";

interface decodedProps {
  sub: string;
  exp: number;
}

const useAuth = () => {
  const user = { loggedIn: false };

  const token = localStorage.getItem("token.coleta.precos");
  if (token) {
    const decoded: decodedProps = jwtDecode(token);
    const currentTime = Date.now() / 1000;
    if (decoded.exp < currentTime) {
      localStorage.removeItem("token");
      user.loggedIn = false;
    } else {
      user.loggedIn = true;
    }
  }
  return user && user.loggedIn;
};

function ProtectedRoutes() {
  const isAuth = useAuth();
  return isAuth ? <Outlet /> : <Navigate to="/login" replace />;
}

export default ProtectedRoutes;
