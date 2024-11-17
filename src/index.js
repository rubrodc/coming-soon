import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './routes/root';
import Home from './components/Home';
import Uses from './components/Uses';
import './styles/global.css';
import HardwarePage from './components/uses/HardwarePage';
import Now from './components/Now';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/uses",
        element: <Uses />,
      },
      {
        path: "/uses/macbook-pro",
        element: <HardwarePage product='macbook-pro' />,
      },
      {
        path: "/uses/iphone-15-pro",
        element: <HardwarePage product='iphone-15-pro' />,
      },
      {
        path: "/uses/apple-watch",
        element: <HardwarePage product='apple-watch' />,
      },
      {
        path: "/uses/macbook-air",
        element: <HardwarePage product='macbook-air' />,
      },
      {
        path: "/uses/mi-curved-gaming",
        element: <HardwarePage product='mi-curved-gaming' />,
      },
      {
        path: "/uses/airpods-4",
        element: <HardwarePage product='airpods-4' />,
      },
      {
        path: "/uses/sony-wh-xb910n",
        element: <HardwarePage product='sony-wh-xb910n' />,
      },
      {
        path: "/uses/logitech-mx-master-3",
        element: <HardwarePage product='logitech-mx-master-3' />,
      },
      {
        path: "/uses/pocket-knife",
        element: <HardwarePage product='pocket-knife' />,
      },
      {
        path: "/uses/gopro",
        element: <HardwarePage product='gopro' />,
      },
      {
        path: "/uses/canon-250d",
        element: <HardwarePage product='canon-250d' />,
      },
      {
        path: "/uses/playstation-5",
        element: <HardwarePage product='playstation-5' />,
      },
      {
        path: "/now",
        element: <Now />,
      },
    ],
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
