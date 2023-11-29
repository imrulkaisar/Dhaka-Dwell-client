import useUserData from "../../Hooks/useUserData";

const AdminContent = ({ children }) => {
  const { role } = useUserData();

  if (role === "admin") return children;
};

export default AdminContent;
