import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Home from './Pages/Home';
import Send from './Send/Send.jsx'
import Discuss from './Discuss/Discuss.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// import Error from './Pages/Error';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },

  {
    path: "/send",
    element: <Send/>,
  },
  {
    path: "/discuss",
    element:  <Discuss/>,
  },

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
