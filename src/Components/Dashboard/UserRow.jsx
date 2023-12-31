import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useToast from "../../Hooks/useToast";
import { useQueryClient } from "@tanstack/react-query";

const UserRow = ({ data }) => {
  const { _id, name, email, image, role, apartmentIds, registerDate } =
    data || {};
  const { showToast } = useToast();
  const axiosSecure = useAxiosSecure();
  const queryClient = useQueryClient();

  const deleteMember = async (userId) => {
    try {
      const res = await axiosSecure.delete(`/members/delete?id=${userId}`);

      if (res.data.success) {
        showToast("success", "User deleted successfully!");
      } else {
        showToast("error", "Something wrong!");
      }
    } catch (error) {
      console.error("Error deleting member:", error);
    }
  };

  const handleDeletion = async () => {
    try {
      await deleteMember(_id);

      queryClient.invalidateQueries("all members");
    } catch (error) {
      console.error(error);
    }
  };

  const handleMakeUser = async () => {
    try {
      const res = await axiosSecure.patch(`/members/update/${_id}`, {
        role: "user",
      });

      if (res.data.success) {
        queryClient.invalidateQueries("all members");
        showToast("success", "User Role updated!");
      }
    } catch (error) {
      console.error(error);
    }
  };

  // console.log(Object.keys(data).join(", "));

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
          src={image ? image : "https://tinyurl.com/yckdhnx3"}
          alt={name}
        />
        <div className="ps-3">
          <div className="text-base font-semibold capitalize">{name}</div>
          <div className="font-normal text-gray-500">{email}</div>
        </div>
      </th>
      <td className="px-6 py-4 uppercase">{role}</td>
      <td className="px-6 py-4">
        <div className="flex items-center">
          <div className="h-2.5 w-2.5 rounded-full bg-green-500 me-2" /> Clear
        </div>
      </td>
      <td className="px-6 py-4">
        {role === "user" && (
          <button
            onClick={handleDeletion}
            className="bg-red-500 text-white py-2 px-5 text-xs uppercase rounded-md whitespace-nowrap"
          >
            Delete User
          </button>
        )}
        {role === "member" && (
          <button
            onClick={handleMakeUser}
            className="bg-yellow-500 text-white py-2 px-5 text-xs uppercase rounded-md whitespace-nowrap"
          >
            Make User
          </button>
        )}
      </td>
    </tr>
  );
};

export default UserRow;
