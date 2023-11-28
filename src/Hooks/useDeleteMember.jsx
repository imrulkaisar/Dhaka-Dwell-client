import useAxiosPublic from "./useAxiosPublic";
import useToast from "./useToast";

const useDeleteMember = async () => {
  const axiosPublic = useAxiosPublic();
  const { showToast } = useToast();

  const deleteMember = async (userId) => {
    try {
      const res = await axiosPublic.delete(`/members/delete?id=${userId}`);

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
