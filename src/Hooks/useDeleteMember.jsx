import useAxiosSecure from "./useAxiosSecure";
import useToast from "./useToast";

const useDeleteMember = async () => {
  const axiosSecure = useAxiosSecure();
  const { showToast } = useToast();

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

  return { deleteMember };
};

export default useDeleteMember;
