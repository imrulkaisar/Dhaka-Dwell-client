import { createBrowserRouter } from "react-router-dom";
import MainTemplate from "../Layouts/MainTemplate";
import Home from "../Pages/Home";
import Dashboard from "../Layouts/Dashboard";
import Index from "../Pages/Dashboard/Index";
import PageNotFound from "../Pages/PageNotFound";
import Apartments from "../Pages/Apartments";
import Register from "../Pages/Register";
import Login from "../Pages/Login";

const Routers = createBrowserRouter([
  {
    path: "/",
    element: <MainTemplate />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/apartments",
        element: <Apartments />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "",
        element: <Index />,
      },
    ],
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);

export default Routers;
