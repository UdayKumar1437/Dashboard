import logo from './logo.svg';
import './App.css';
import DashboardLayout from './Layout/DashboardBaseLayout/DashboardBaseLayout';
import { Outlet } from 'react-router-dom';
import { GoogleLogin, googleLogout, useGoogleLogin } from '@react-oauth/google';
import { useEffect, useState } from 'react';
import axios from 'axios';
import LoginLayout from './Layout/DashboardBaseLayout/LoginLayout/LoginLayout';


function App() {
  return (
    <>
      <DashboardLayout />
      {/* <Outlet/> */}
    </>
  );
}

export default App;
