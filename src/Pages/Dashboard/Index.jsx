import useAdmin from "../../Hooks/useAdmin";
import AdminProfile from "./AdminProfile";
import MyProfile from "./MyProfile";

const Index = () => {
  const { isAdmin, isAdminLoading } = useAdmin();

  if (isAdminLoading) return <p>Loading ...</p>;

  return <>{isAdmin ? <AdminProfile /> : <MyProfile />}</>;
};

export default Index;
