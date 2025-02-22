import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
  const isAuthenicated = useSelector((state) => state?.user);
  console.log(isAuthenicated);
  
  return (
    <div>{isAuthenicated ? <Outlet/> : <Navigate to="/login"/>}</div>
  )
}

export default ProtectedRoute