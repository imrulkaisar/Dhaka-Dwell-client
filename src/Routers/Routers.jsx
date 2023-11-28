import { Navigate, createBrowserRouter } from "react-router-dom";
import MainTemplate from "../Layouts/MainTemplate";
import Home from "../Pages/Home";
import Dashboard from "../Layouts/Dashboard";
import Index from "../Pages/Dashboard/Index";
import PageNotFound from "../Pages/PageNotFound";
import Apartments from "../Pages/Apartments";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import Announcements from "../Pages/Dashboard/Announcements";
import MakePayments from "../Pages/Dashboard/MakePayments";
import PaymentHistory from "../Pages/Dashboard/PaymentHistory";
import ManageMembers from "../Pages/Dashboard/ManageMembers";
import ManageCoupons from "../Pages/Dashboard/ManageCoupons";
import AgreementRequests from "../Pages/Dashboard/AgreementRequests";
import MakeAnnouncement from "../Pages/Dashboard/MakeAnnouncement";

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
        path: "index",
        element: <Index />,
        index: true,
      },
      {
        path: "announcements",
        element: <Announcements />,
      },
      {
        path: "make-payment",
        element: <MakePayments />,
      },
      {
        path: "payment-history",
        element: <PaymentHistory />,
      },
      {
        path: "users",
        element: <ManageMembers />,
      },
      {
        path: "coupons",
        element: <ManageCoupons />,
      },
      {
        path: "requests",
        element: <AgreementRequests />,
      },
      {
        path: "create-announcement",
        element: <MakeAnnouncement />,
      },
      {
        path: "*",
        element: <Navigate to="/dashboard/index" replace />,
      },
    ],
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);

export default Routers;
