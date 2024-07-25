import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import BottomNav from "./components/bottom-nav";
import HomePage from "./pages/home";
import FriendPage from "./pages/friend";
import EarnPage from "./pages/earn";
import SkinPage from "./pages/skin";
import AirdropPage from "./pages/airdrop";
import ErrorPage from "./error-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <BottomNav />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/earn",
        element: <EarnPage />,
      },
      {
        path: "/friend",
        element: <FriendPage />,
      },
      {
        path: "/skin",
        element: <SkinPage />,
      },
      {
        path: "/airdrop",
        element: <AirdropPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
