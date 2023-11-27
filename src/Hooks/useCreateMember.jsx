import useAxiosPublic from "./useAxiosPublic";

const useCreateMember = () => {
  const axiosPublic = useAxiosPublic();

  const createMember = async (memberData) => {
    try {
      // Make a POST request to the "/members/create" endpoint
      const response = await axiosPublic.post("members/create", memberData);

      // Log the response or handle it as needed
      console.log("Member created successfully:", response.data);

      // Optionally, you can return the created member data
      return response.data;
    } catch (error) {
      // Handle errors
      console.error("Error creating member:", error);
      throw error; // Rethrow the error to be caught by the caller
    }
  };

  return createMember;
};

export default useCreateMember;
