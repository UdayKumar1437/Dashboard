import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { GoogleOAuthProvider } from '@react-oauth/google';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
import { store } from './App/Store';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DashboardBaseLayout from './Layout/DashboardBaseLayout/DashboardBaseLayout';
import ProtectedRoute from './Components/ProtectedRoute';
import LoginLayout from './Layout/DashboardBaseLayout/LoginLayout/LoginLayout';
import CarouselTest from './Components/Carousel';


const router = createBrowserRouter([
  {
    path: "/",
    element: <ProtectedRoute/>,
    children: [
      {
        path: "/",
        element: <CarouselTest/>
      },
    ],
  },
  {
    path: "/login",
    element: <CarouselTest />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <GoogleOAuthProvider clientId='906046445776-m2na643fcvbvisk267q38ela7at4f2i8.apps.googleusercontent.com'>
    <Provider store={store}>
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </Provider>
  </GoogleOAuthProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
