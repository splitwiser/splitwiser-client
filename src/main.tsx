import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import FriendsRootPage from "./features/friends/pages/root.tsx";
import FriendsListPage from "./features/friends/pages/list.tsx";
import App from "./App.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/friends",
    element: <FriendsRootPage />,
    children: [
      {
        path: "list",
        element: <FriendsListPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
