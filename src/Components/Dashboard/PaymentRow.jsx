import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useToast from "../../Hooks/useToast";
import { useQueryClient } from "@tanstack/react-query";
import useUserData from "../../Hooks/useUserData";

const PaymentRow = ({ data }) => {
  const { role } = useUserData();
  const {
    _id,
    memberId,
    memberName,
    memberEmail,
    apartmentId,
    floor,
    block,
    apartmentNo,
    month,
    price,
    transactionId,
    status,
  } = data || {};
  // const { showToast } = useToast();
  // const axiosSecure = useAxiosSecure();
  // const queryClient = useQueryClient();

  // console.log(Object.keys(data).join(", "));

  const handleAccept = async () => {
    console.log("Payment accepted");
  };

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
          src={"https://tinyurl.com/yckdhnx3"}
        />
        <div className="ps-3">
          <div className="text-base font-semibold capitalize">{memberName}</div>
          <div className="font-normal text-gray-500">{memberEmail}</div>
        </div>
      </th>
      <td className="px-6 py-4 uppercase text-secondary">
        <b>Floor: </b>
        {floor} {block}, {apartmentNo}
      </td>
      <td className="px-6 py-4">
        <div className="whitespace-normal">
          <span className="text-primary font-bold">৳{price}</span> <br /> (
          {month})
        </div>
      </td>
      <td className="px-6 py-4">{transactionId}</td>
      <td className="px-6 py-4">
        <div className="flex items-center">
          {status === "pending" && (
            <div className="flex items-center">
              <div className="h-2.5 w-2.5 rounded-full bg-yellow-500 me-2" />{" "}
              Pending
            </div>
          )}
          {status === "successful" && (
            <div className="flex items-center">
              <div className="h-2.5 w-2.5 rounded-full bg-green-500 me-2" />{" "}
              Successful
            </div>
          )}
          {status === "denied" && (
            <div className="flex items-center">
              <div className="h-2.5 w-2.5 rounded-full bg-red-500 me-2" />{" "}
              Denied
            </div>
          )}
        </div>
      </td>
      {role === "admin" && (
        <td className="px-6 py-4">
          <button
            onClick={handleAccept}
            className="bg-green-500 text-white py-2 px-5 font-semibold text-xs uppercase rounded-md hover:bg-green-600"
          >
            Accept
          </button>
        </td>
      )}
    </tr>
  );
};

export default PaymentRow;
