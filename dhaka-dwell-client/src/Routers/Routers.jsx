import { createBrowserRouter } from "react-router-dom";
import MainTemplate from "../Layouts/MainTemplate";
import Home from "../Pages/Home";
import Dashboard from "../Layouts/Dashboard";
import Index from "../Pages/Dashboard/Index";
import PageNotFound from "../Pages/PageNotFound";

const Routers = createBrowserRouter([
  {
    path: "/",
    element: <MainTemplate />,
    children: [
      {
        path: "/",
        element: <Home />,
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
