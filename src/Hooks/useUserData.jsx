import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useUserData = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const image = user?.photoURL || "";

  const loadMemberDetails = async () => {
    try {
      const res = await axiosSecure.get(`/members/member?email=${user.email}`);
      return res.data;
    } catch (error) {
      console.error(error);
    }
  };

  const { data: member = {}, isPending } = useQuery({
    queryKey: ["member", user.email],
    queryFn: loadMemberDetails,
  });

  const { _id, name, email, role, apartmentIds, registerDate } = member || {};

  if (isPending) {
    // Return a loading state or a default user object
    return {
      isPending: true,
      _id: "loading",
      name: "loading",
      email: "loading@example.com",
      role: "user",
      apartmentIds: [],
      registerDate: null,
    };
  }

  return {
    isPending: false,
    _id,
    name,
    image,
    email,
    role,
    apartmentIds,
    registerDate,
  };
};

export default useUserData;
