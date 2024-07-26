import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import BottomNav from "./components/bottom-nav";
import GamePage from "./pages/game";
import HomePage from "./pages/home";
import FriendPage from "./pages/friend";
import EarnPage from "./pages/earn";
import SkinPage from "./pages/skin";
import AirdropPage from "./pages/airdrop";
import ErrorPage from "./error-page";
import LoadingScreen from "./components/loading-screen";
import NewBie from "./pages/newbie";

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
  {
    path: "/game",
    element: <GamePage />,
  },
  {
    path: "/loading",
    element: <LoadingScreen />,
  },
  {
    path: "/newbie",
    element: <NewBie />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
