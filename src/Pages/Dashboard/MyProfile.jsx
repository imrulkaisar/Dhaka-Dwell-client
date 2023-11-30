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

import { useQuery } from "@tanstack/react-query";
import useUserData from "../../Hooks/useUserData";
import formatDateString from "../../utils/formateDateString";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const MyProfile = () => {
  const axiosSecure = useAxiosSecure();
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

  const { data: agreements = [], isPending: isAgreementsPending } = useQuery({
    queryKey: ["agreements", _id],
    queryFn: async () => {
      try {
        const res = await axiosSecure.get(
          `/agreements/get-agreement?memberId=${_id}&status=accepted`
        );

        return res.data;
      } catch (error) {
        console.error(error);
      }
    },
    enabled: !!_id,
  });

  const { apartmentId } = agreements[0] || {};

  const { data: apartment = {}, isPending: isApartmentLoading } = useQuery({
    queryKey: ["apartment details", apartmentId],
    queryFn: async () => {
      try {
        const res = await axiosSecure.get(
          `/apartments/get-apartment-by-id/${apartmentId}`
        );

        return res.data;
      } catch (error) {
        console.error(error);
      }
    },
    enabled: !!apartmentId,
  });

  // console.log(apartment);

  const {
    name: apartmentName,
    floor,
    block,
    number: apartmentNo,
    rent: price,
  } = apartment || {};

  console.log(apartment);

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
                  <td className="px-6 py-4 capitalize text-primary font-semibold text-lg">
                    {role}
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
        <div className="mt-8">
          <h3 className="text-3xl font-semibold">Apartment Details:</h3>

          {/* table */}
          {apartmentId ? (
            <div className="relative overflow-x-auto sm:rounded-lg mt-5">
              <table className="max-w-xl w-full text-sm text-left rtl:text-right text-gray-500">
                <tbody>
                  <tr className="odd:bg-white even:bg-gray-50">
                    <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                      Name
                    </th>
                    <td className="px-6 py-4 capitalize">{apartmentName}</td>
                  </tr>
                  <tr className="odd:bg-white even:bg-gray-50">
                    <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                      Floor
                    </th>
                    <td className="px-6 py-4 capitalize">{floor}</td>
                  </tr>
                  <tr className="odd:bg-white even:bg-gray-50">
                    <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                      Block
                    </th>
                    <td className="px-6 py-4 capitalize">{floor + block}</td>
                  </tr>
                  <tr className="odd:bg-white even:bg-gray-50">
                    <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                      Apartment Number
                    </th>
                    <td className="px-6 py-4 capitalize">{apartmentNo}</td>
                  </tr>
                  <tr className="odd:bg-white even:bg-gray-50">
                    <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                      Monthly Rent
                    </th>
                    <td className="px-6 py-4 capitalize text-primary font-bold text-xl">
                      ৳{price}
                    </td>
                  </tr>
                  <tr className="odd:bg-white even:bg-gray-50">
                    <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                      Apartment ID:
                    </th>
                    <td className="px-6 py-4 capitalize">{apartmentId}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          ) : (
            <p className="p-5 mt-5 max-w-lg text-2xl border-2">No data found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
