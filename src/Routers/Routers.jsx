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
import PrivateRouter from "./PrivateRouter";
import AdminRouter from "./AdminRouter";

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
    element: (
      <PrivateRouter>
        <Dashboard />
      </PrivateRouter>
    ),
    children: [
      {
        path: "index",
        element: (
          <PrivateRouter>
            <Index />
          </PrivateRouter>
        ),
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
        element: (
          <AdminRouter>
            <ManageMembers />
          </AdminRouter>
        ),
      },
      {
        path: "coupons",
        element: (
          <AdminRouter>
            <ManageCoupons />
          </AdminRouter>
        ),
      },
      {
        path: "requests",
        element: (
          <AdminRouter>
            <AgreementRequests />
          </AdminRouter>
        ),
      },
      {
        path: "create-announcement",
        element: (
          <AdminRouter>
            <MakeAnnouncement />
          </AdminRouter>
        ),
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
