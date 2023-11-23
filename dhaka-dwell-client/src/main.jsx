import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import UserContextProvider from "./Contexts/UserContext";
import { RouterProvider } from "react-router-dom";
import Routers from "./Routers/Routers";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserContextProvider>
      <RouterProvider router={Routers} />
    </UserContextProvider>
  </React.StrictMode>
);
