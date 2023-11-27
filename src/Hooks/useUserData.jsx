import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosPublic from "./useAxiosPublic";

const useUserData = () => {
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();
  const image = user?.photoURL || "";

  const loadMemberDetails = async () => {
    try {
      const res = await axiosPublic.get(`/members/member?email=${user.email}`);
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

  if (isPending) return;

  return {
    isPending,
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
