import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Authentication/Firebase.config";
import useAxiosPublic from "../Hooks/useAxiosPublic";

// Create a context for user authentication
export const UserContext = createContext(null);

const UserContextProvider = ({ children }) => {
  // State to store user information and loading status
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  // Function to create a new user account
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Function to log in with email and password
  const logInWithEmailAndPassword = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Function to sign in with Google
  const signInWithGoogle = () => {
    setLoading(true);
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  };

  // Function to update user profile
  const updateUser = (updateData) => {
    setLoading(true);
    updateProfile(auth.currentUser, updateData);
  };

  // Function to log out
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  // useEffect to listen for authentication state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        console.log("Currently Logged In: ", currentUser);
        setLoading(false);

        // // get token and store client
        // const userInfo = { email: currentUser.email };
        // useAxiosPublic.post("/jwt", userInfo).then((res) => {
        //   if (res.data.token) {
        //     localStorage.setItem("accessToken", res.data.token);
        //     setLoading(false);
        //   }
        // });
      } else {
        console.log("User logged out!");

        // localStorage.removeItem("accessToken");
        setLoading(false);
      }
    });

    // Unsubscribe from the authentication state when the component unmounts
    return () => unsubscribe();
  }, []);

  // Object containing authentication-related information
  const authInfo = {
    user,
    loading,
    createUser,
    logInWithEmailAndPassword,
    signInWithGoogle,
    updateUser,
    logOut,
  };

  // Provide the context value to the components
  return (
    <UserContext.Provider value={authInfo}>{children}</UserContext.Provider>
  );
};

export default UserContextProvider;

//
