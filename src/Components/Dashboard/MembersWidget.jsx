import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const MembersWidget = () => {
  const axiosSecure = useAxiosSecure();

  const { data: members = [], isPending } = useQuery({
    queryKey: ["allMembers"],
    queryFn: async () => {
      try {
        const res = await axiosSecure.get("/members/get-all?role=member");
        return res.data;
      } catch (error) {
        console.error(error);
        throw new Error("Failed to fetch total members"); // throw an error to be caught by React Query
      }
    },
  });

  if (isPending) return;

  return (
    <div className="row-span-3 bg-white shadow rounded-lg">
      <div className="flex items-center justify-between px-6 py-5 font-semibold border-b border-gray-100">
        <span>Dhaka Dwell Members</span>
        <Link
          to="/dashboard/users"
          className="inline-flex justify-center rounded-md px-1 -mr-1 bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-600"
        >
          All Users
        </Link>
      </div>
      <div className="overflow-y-auto" style={{ maxHeight: "24rem" }}>
        <ul className="p-6 even:bg-gray-100">
          {members.map((member) => (
            <li key={member._id} className="flex items-center border-b-2 py-4">
              <div className="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden">
                <img src={member?.image} alt={member?.name} />
              </div>
              <span className="text-gray-600">{member?.name}</span>
              <span className="ml-auto text-sm">{member?.email}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MembersWidget;
