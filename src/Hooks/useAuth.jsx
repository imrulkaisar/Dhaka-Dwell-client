import { useContext } from "react";
import { UserContext } from "../Contexts/UserContext";

const useAuth = () => {
  const AuthContext = useContext(UserContext);

  if (!AuthContext) {
    throw new Error("useAuth must be used within a UserContextProvider");
  }

  const {
    user,
    loading,
    createUser,
    logInWithEmailAndPassword,
    signInWithGoogle,
    updateUser,
    logOut,
  } = useContext(UserContext);

  return {
    user,
    loading,
    createUser,
    logInWithEmailAndPassword,
    signInWithGoogle,
    updateUser,
    logOut,
  };
};

export default useAuth;
