import axios from "axios";

// Create a public instance of Axios with custom configurations
const axiosPublic = axios.create({
  baseURL: "http://localhost:5000", // replace server url
});

// Custom hook to provide the public Axios instance
const useAxiosPublic = () => axiosPublic;

export default useAxiosPublic;
