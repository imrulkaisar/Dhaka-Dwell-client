import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
// import useAxiosSecure from "./useAxiosSecure";
import useAxiosPublic from "./useAxiosPublic";

const useAdmin = () => {
  const { user, loading } = useAuth();
  const axiosPublic = useAxiosPublic();
  const { data: isAdmin, isPending: isAdminLoading } = useQuery({
    queryKey: [user?.email, "isAdmin"],
    enabled: !loading,
    queryFn: async () => {
      console.log("asking or checking is admin", user);
      const res = await axiosPublic.get(`/members/member?email=${user.email}`);
      // console.log(res.data);
      return res.data?.role === "admin";
    },
  });
  return { isAdmin, isAdminLoading };
};

export default useAdmin;
