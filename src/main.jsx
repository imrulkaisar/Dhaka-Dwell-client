import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import UserContextProvider from "./Contexts/UserContext";
import { RouterProvider } from "react-router-dom";
import Routers from "./Routers/Routers";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserContextProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={Routers} />
      </QueryClientProvider>
    </UserContextProvider>
  </React.StrictMode>
);
