/**
 * ==============================
 * Requirements
 * ==============================
 *
 * [TASK] Task description
 *
 * [TODO] 1. This page will have the following informations:
          a. Admin's name
          b. Image
          c. Email
          d. Total number of rooms in the database
          e. Percentage of available rooms in the database
          f. Percentage of booked/rented/unavailable rooms in the database
          g. Number of users in the database
          h. Number of members in the database
 * [TODO] 2. 
 */

import { IoMdNotificationsOutline } from "react-icons/io";
import { AiOutlineNotification } from "react-icons/ai";
import { FaUsers } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import MembersWidget from "../../Components/Dashboard/MembersWidget";

const AdminProfile = () => {
  const axiosSecure = useAxiosSecure();

  const { data: totalUsers, isLoading } = useQuery({
    queryKey: ["allUsersNum"],
    queryFn: async () => {
      try {
        const res = await axiosSecure.get("/members/total");
        return res.data.total;
      } catch (error) {
        console.error(error);
        throw new Error("Failed to fetch total users"); // throw an error to be caught by React Query
      }
    },
  });

  const { data: totalMember } = useQuery({
    queryKey: ["allMemberNum"],
    queryFn: async () => {
      try {
        const res = await axiosSecure.get("/members/total?role=member");
        return res.data.total;
      } catch (error) {
        console.error(error);
        throw new Error("Failed to fetch total members"); // throw an error to be caught by React Query
      }
    },
  });

  const { data: totalApartments } = useQuery({
    queryKey: ["apartmentNum"],
    queryFn: async () => {
      try {
        const res = await axiosSecure.get("/apartments/total");
        return res.data.total;
      } catch (error) {
        console.error(error);
        throw new Error("Failed to fetch total apartments"); // throw an error to be caught by React Query
      }
    },
  });

  console.log(totalUsers, totalMember);

  return (
    <div className="space-y-6">
      <div className="flex flex-col space-y-6 md:space-y-0 md:flex-row justify-between">
        <div className="mr-6">
          <h1 className="text-4xl font-semibold mb-2">Admin Dashboard</h1>
          <h2 className="text-gray-600 ml-0.5">Dhaka Dwell House management</h2>
        </div>
        <div className="flex flex-wrap items-start justify-end -mb-3">
          <Link
            to="/dashboard/requests"
            className="inline-flex px-5 py-3 text-purple-600 hover:text-purple-700 focus:text-purple-700 hover:bg-purple-100 focus:bg-purple-100 border border-purple-600 rounded-md mb-3"
          >
            <IoMdNotificationsOutline className="text-2xl mr-1" />
            Manage Agreement Requests
          </Link>
          <Link
            to="/dashboard/create-announcement"
            className="inline-flex px-5 py-3 text-white bg-purple-600 hover:bg-purple-700 focus:bg-purple-700 rounded-md ml-6 mb-3"
          >
            <AiOutlineNotification className="text-xl mr-2" />
            New Announcement
          </Link>
        </div>
      </div>
      <section className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
        <div className="flex items-center p-8 bg-white shadow rounded-lg">
          <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-purple-600 bg-purple-100 rounded-full mr-6">
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
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </div>
          <div>
            <span className="block text-2xl font-bold">
              {totalUsers.toString().padStart(2, "0")}
            </span>
            <span className="block text-gray-500">Total Users</span>
          </div>
        </div>
        <div className="flex items-center p-8 bg-white shadow rounded-lg">
          <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-green-600 bg-green-100 rounded-full mr-6">
            <FaUsers className="text-2xl" />
          </div>
          <div>
            <span className="block text-2xl font-bold">
              {totalMember.toString().padStart(2, "0")}
            </span>
            <span className="block text-gray-500">Total Members</span>
          </div>
        </div>
        <div className="flex items-center p-8 bg-white shadow rounded-lg">
          <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-red-600 bg-red-100 rounded-full mr-6">
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
                d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"
              />
            </svg>
          </div>
          <div>
            <span className="inline-block text-2xl font-bold">
              {totalApartments}
            </span>
            <span className="inline-block text-xl text-gray-500 font-semibold">
              {/* (14%) */}
            </span>
            <span className="block text-gray-500">Apartments</span>
          </div>
        </div>
        <div className="flex items-center p-8 bg-white shadow rounded-lg">
          <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-blue-600 bg-blue-100 rounded-full mr-6">
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
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
              />
            </svg>
          </div>
          <div>
            <span className="block text-2xl font-bold">83%</span>
            <span className="block text-gray-500">Apartments Available</span>
          </div>
        </div>
      </section>
      <section className="grid md:grid-cols-2 xl:grid-cols-4 xl:grid-rows-3 xl:grid-flow-col gap-6">
        <div className="flex flex-col md:col-span-2 md:row-span-2 bg-white shadow rounded-lg">
          <div className="px-6 py-5 font-semibold border-b border-gray-100">
            The number of applied and left students per month
          </div>
          <div className="p-4 flex-grow">
            <div className="flex items-center justify-center h-full px-4 py-16 text-gray-400 text-3xl font-semibold bg-gray-100 border-2 border-gray-200 border-dashed rounded-md">
              Chart
            </div>
          </div>
        </div>
        <MembersWidget />
        <div className="flex flex-col row-span-3 bg-white shadow rounded-lg">
          <div className="px-6 py-5 font-semibold border-b border-gray-100">
            Students by type of studying
          </div>
          <div className="p-4 flex-grow">
            <div className="flex items-center justify-center h-full px-4 py-24 text-gray-400 text-3xl font-semibold bg-gray-100 border-2 border-gray-200 border-dashed rounded-md">
              Chart
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdminProfile;
