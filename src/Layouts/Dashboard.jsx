/**
 * ==============================
 * Requirements
 * ==============================
 *
 * [TASK] Dashboard layout
 *
 * [TODO] 1. Note: This must be a dashboard layout
 * [TODO] 2.  When a user clicks on the Dashboard, he/she will be redirected to a page where there will be the following routes:
          A. My Profile
          B. Announcements

 * [TODO] 3. When a Member clicks on the Dashboard, he/she will be redirected to a page where there will be the following routes:
          A. My Profile
          B. Make payment
          C. Payment History
          D. Announcements

 * [TODO] 4.  When an admin clicks on the Dashboard, he/she will be redirected to a page where there will be the following routes:
          A. Admin Profile(see bonus tasks)
          B. Manage Members
          C. Make Announcement
          D. Agreement Requests
          E. Manage Coupons

 * [TODO] 5. Add any required legal information or disclaimers.
 */

import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import DashboardHeader from "./DashboardHeader";

const Dashboard = () => {
  return (
    <div className="flex bg-gray-100 min-h-screen">
      <aside className="hidden sm:flex sm:flex-col">
        <SideBar />
      </aside>
      <div className="flex-grow text-gray-800">
        <DashboardHeader />
        <main className="p-6 sm:p-10">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
