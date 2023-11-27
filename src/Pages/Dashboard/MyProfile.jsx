/**
 * ==============================
 * Requirements
 * ==============================
 *
 * [TASK] User Profile
 *
 * [TODO] 1. User: This page will have the user's name, image, email. Agreement accept date and Rented apartment info such as floor, block, room no etc. will be ‘none’.
 * [TODO] 2. Members: This page will have the user's name, image, email, Agreement accept date, Rented apartment info (floor, block, room no etc.)
 */

import useUserData from "../../Hooks/useUserData";
import formatDateString from "../../utils/formateDateString";

const MyProfile = () => {
  const {
    isPending,
    _id,
    name,
    image,
    email,
    role,
    apartmentIds,
    registerDate,
  } = useUserData();

  if (isPending) return <p>Loading ...</p>;

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="dashboard-heading capitalize">Hello, {name}</h2>
        <p className="sub-heading">Welcome to Dhaka Dwell.</p>
      </div>

      {/* data */}
      <div className="">
        <img className="max-w-[100px]" src={image} alt="" />

        <div className="mt-5">
          <h3 className="text-3xl font-semibold">Profile Details:</h3>

          {/* table */}
          <div className="relative overflow-x-auto sm:rounded-lg mt-5">
            <table className="max-w-xl w-full text-sm text-left rtl:text-right text-gray-500">
              <tbody>
                <tr className="odd:bg-white even:bg-gray-50">
                  <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    Name
                  </th>
                  <td className="px-6 py-4 capitalize">{name}</td>
                </tr>
                <tr className="odd:bg-white even:bg-gray-50">
                  <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    Email Address
                  </th>
                  <td className="px-6 py-4 capitalize">{email}</td>
                </tr>
                <tr className="odd:bg-white even:bg-gray-50">
                  <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    User Role
                  </th>
                  <td className="px-6 py-4 capitalize">{role}</td>
                </tr>
                <tr className="odd:bg-white even:bg-gray-50">
                  <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    Apartment ID:
                  </th>
                  <td className="px-6 py-4 capitalize">
                    {apartmentIds?.length > 0 ? apartmentIds[0] : "Null"}
                  </td>
                </tr>
                <tr className="odd:bg-white even:bg-gray-50">
                  <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    Registered At:
                  </th>
                  <td className="px-6 py-4 capitalize">
                    {formatDateString(registerDate)}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
