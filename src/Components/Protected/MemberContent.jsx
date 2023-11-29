import useUserData from "../../Hooks/useUserData";

const MemberContent = ({ children }) => {
  const { role } = useUserData();

  if (role === "member" || role === "admin") return children;
};

export default MemberContent;
