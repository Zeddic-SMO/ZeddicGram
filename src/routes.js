import { Routes, Route, Navigate } from "react-router-dom";
import Register from "./screens/register/Register";
import NotFound from "./screens/404/NotFound";
import Home from "./screens/home/Home";
import Login from "./screens/login/Login";
import Profile from "./screens/profile/Profile";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/user/:id" element={<Profile />} />
      <Route path="/404" element={<NotFound />} />
      <Route path="*" element={<Navigate to="/404" />} />
    </Routes>
  );
};

export default AppRoutes;
