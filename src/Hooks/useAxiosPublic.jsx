import axios from "axios";

// Create a public instance of Axios with custom configurations
const axiosPublic = axios.create({
  baseURL: import.meta.env.VITE_LIVE_SERVER || "http://localhost:3333", //
});

// Custom hook to provide the public Axios instance
const useAxiosPublic = () => axiosPublic;

export default useAxiosPublic;
