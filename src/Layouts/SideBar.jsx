import { Link, NavLink } from "react-router-dom";
import LogoIcon from "./../assets/Logo.png";

import { AiOutlineDashboard } from "react-icons/ai";
import { TfiAnnouncement } from "react-icons/tfi";
import { IoIosNotifications } from "react-icons/io";
import { FaCreditCard, FaHistory, FaTags, FaUserFriends } from "react-icons/fa";
import AdminContent from "../Components/Protected/AdminContent";
import MemberContent from "../Components/Protected/MemberContent";

const SideBar = () => {
  return (
    <aside className="hidden sm:flex sm:flex-col">
      <Link
        to="/"
        className="inline-flex items-center justify-center bg-gray-700 w-full text-gray-200 py-5"
      >
        <img className="w-12 bg-white rounded-full" src={LogoIcon} alt="" />
        {/* <span>Dhaka Dwell</span> */}
      </Link>
      <div className="flex-grow flex flex-col justify-between text-gray-500 bg-gray-800">
        <nav
          id="side-nav"
          className="flex flex-col gap-[2px] border-b-2 border-t-2 border-gray-700 bg-gray-700"
        >
          <NavLink
            to="/dashboard/index"
            className="inline-flex items-center px-5 py-3 bg-gray-800 hover:text-gray-400 hover:bg-gray-700 focus:text-gray-400 focus:bg-gray-700"
          >
            <AiOutlineDashboard className="text-3xl" />
            <span className="ml-2">Dashboard</span>
          </NavLink>
          <NavLink
            to="/dashboard/announcements"
            className="inline-flex items-center px-5 py-3 bg-gray-800 hover:text-gray-400 hover:bg-gray-700 focus:text-gray-400 focus:bg-gray-700"
          >
            <TfiAnnouncement className="text-2xl" />
            <span className="ml-3">Announcements</span>
          </NavLink>

          <MemberContent>
            <NavLink
              to="/dashboard/make-payment"
              className="inline-flex items-center px-5 py-3 bg-gray-800 hover:text-gray-400 hover:bg-gray-700 focus:text-gray-400 focus:bg-gray-700"
            >
              <FaCreditCard className="text-2xl" />
              <span className="ml-2">Make Payment</span>
            </NavLink>
            <NavLink
              to="/dashboard/payment-history"
              className="inline-flex items-center px-5 py-3 bg-gray-800 hover:text-gray-400 hover:bg-gray-700 focus:text-gray-400 focus:bg-gray-700"
            >
              <FaHistory className="text-2xl" />
              <span className="ml-3 whitespace-nowrap">Payment History</span>
            </NavLink>
          </MemberContent>

          <AdminContent>
            <NavLink
              to="/dashboard/users"
              className="inline-flex items-center px-5 py-3 bg-gray-800 hover:text-gray-400 hover:bg-gray-700 focus:text-gray-400 focus:bg-gray-700"
            >
              <FaUserFriends className="text-2xl" />
              <span className="ml-3 whitespace-nowrap">All Users</span>
            </NavLink>
            <NavLink
              to="/dashboard/coupons"
              className="inline-flex items-center px-5 py-3 bg-gray-800 hover:text-gray-400 hover:bg-gray-700 focus:text-gray-400 focus:bg-gray-700"
            >
              <FaTags className="text-2xl" />
              <span className="ml-3 whitespace-nowrap">Coupons</span>
            </NavLink>
            <NavLink
              to="/dashboard/requests"
              className="inline-flex items-center px-5 py-3 bg-gray-800 hover:text-gray-400 hover:bg-gray-700 focus:text-gray-400 focus:bg-gray-700"
            >
              <IoIosNotifications className="text-2xl" />
              <span className="ml-3 whitespace-nowrap">Requests</span>
            </NavLink>
          </AdminContent>
        </nav>
        {/* <div className="inline-flex items-center justify-center h-20 w-20 border-t border-gray-700">
          <button className="p-3 hover:text-gray-400 hover:bg-gray-700 focus:text-gray-400 focus:bg-gray-700 rounded-lg">
            <span className="sr-only">Settings</span>
            <svg
              aria-hidden="true"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </button>
        </div> */}
      </div>
    </aside>
  );
};

export default SideBar;
