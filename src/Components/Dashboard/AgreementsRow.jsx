import { useQuery, useQueryClient } from "@tanstack/react-query";
import formatDateString from "../../utils/formateDateString";
import { FaCheck } from "react-icons/fa6";
import { LiaTimesSolid } from "react-icons/lia";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useToast from "../../Hooks/useToast";

/* eslint-disable react/prop-types */
const AgreementsRow = ({ data }) => {
  const { _id, apartmentId, memberId, status, agreementDate, submittedDate } =
    data || {};
  const axiosSecure = useAxiosSecure();
  const { showToast } = useToast();
  const queryClient = useQueryClient();

  // console.log(Object.keys(data).join(", "));

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
  });

  const { data: member = {}, isPending: isMemberLoading } = useQuery({
    queryKey: ["Member details", memberId],
    queryFn: async () => {
      try {
        const res = await axiosSecure.get(
          `/members/get-member-by-id/${memberId}`
        );

        return res.data;
      } catch (error) {
        console.error(error);
      }
    },
    enabled: !!data,
  });

  const changeUserRole = async () => {
    const res = await axiosSecure.patch(`/members/change-role/${member._id}`, {
      userRole: "member",
    });

    if (res.data.success) {
      console.log("User updated!");
    }
  };

  const handleAccept = async () => {
    try {
      const res = await axiosSecure.patch(`/agreements/update/${_id}`);

      if (res.data.success) {
        queryClient.invalidateQueries("all agreements");
        queryClient.invalidateQueries("all members");

        if (member.role !== "admin") {
          await changeUserRole();
        }
        showToast("success", "Agreement accepted!");
      } else showToast("error", "Something wrong. Try again.");
    } catch (error) {
      console.error(error);
    }
  };
  const handleDelete = async () => {
    try {
      const res = await axiosSecure.delete(`/agreements/delete/${_id}`);

      if (res.data.success) {
        queryClient.invalidateQueries("all agreements");
        showToast("success", "Agreement deleted!");
      } else showToast("error", "Something wrong. Try again.");
    } catch (error) {
      console.error(error);
    }
  };

  // console.log("apartment details:", apartment);
  // console.log("Member details:", member);

  return (
    <tr className="bg-white border-b hover:bg-gray-50">
      <td className="w-4 p-4">
        <div className="flex items-center">
          <input
            id="checkbox-table-search-1"
            type="checkbox"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
          />
          <label htmlFor="checkbox-table-search-1" className="sr-only">
            checkbox
          </label>
        </div>
      </td>
      <th
        scope="row"
        className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap"
      >
        <img
          className="w-10 h-10 rounded-full"
          src={member?.image || "https://tinyurl.com/yckdhnx3"}
          alt={member?.name}
        />
        <div className="ps-3">
          <div className="text-base font-semibold capitalize">
            {member?.name || "User Name"}
          </div>
          <div className="font-normal text-gray-500">
            {member?.email || "user email"}
          </div>
        </div>
      </th>
      <td className="px-6 py-4 max-w-[250px]">
        <div className="text-secondary flex gap-2 flex-wrap">
          <span>
            <b>Floor: </b>
            {apartment?.floor || "null"},
          </span>
          <span>
            <b>Block: </b>
            {apartment?.block || "null"},
          </span>
          <span>
            <b>Number: </b>
            {apartment?.number || "null"},
          </span>
          <span className="text-primary">
            <b>Rent: </b>৳{apartment?.rent || "null"}
          </span>
        </div>
      </td>
      <td className="px-6 py-4">
        <div className="flex items-center">
          {status === "pending" && (
            <div className="flex items-center">
              <div className="h-2.5 w-2.5 rounded-full bg-yellow-500 me-2" />{" "}
              Pending
            </div>
          )}
          {status === "accepted" && (
            <div className="flex items-center">
              <div className="h-2.5 w-2.5 rounded-full bg-green-500 me-2" />{" "}
              Accepted
            </div>
          )}
        </div>
      </td>
      <td className="px-6 py-4">
        <div className="flex items-center">
          <div>
            <p>
              <b>Submit: </b> {formatDateString(submittedDate)}
            </p>
            <p>
              <b>Agreement: </b> {formatDateString(agreementDate)}
            </p>
          </div>
        </div>
      </td>
      <td className="px-6 py-4">
        <div onClick={handleAccept} className="flex flex-col gap-1 items-end">
          {status !== "accepted" && (
            <button className="w-8 aspect-square text-lg border flex items-center justify-center rounded-full text-green-600 hover:bg-green-600 hover:text-white">
              <FaCheck />
            </button>
          )}
          <button
            onClick={handleDelete}
            className="w-8 aspect-square text-lg border flex items-center justify-center rounded-full text-red-600 hover:bg-red-600 hover:text-white"
          >
            <LiaTimesSolid />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default AgreementsRow;
