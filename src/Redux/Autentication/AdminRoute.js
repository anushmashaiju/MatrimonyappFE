// src/components/AdminRoute.jsx

import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

const AdminRoute = () => {
  const basicDetails = useSelector((state) => state.user.basicDetails);

  return basicDetails && basicDetails.isAdmin ? <Outlet /> : <Navigate to="/" />;
};

export default AdminRoute;
