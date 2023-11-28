import { FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa";
import useAuth from "../Hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useToast from "../Hooks/useToast";
import useCreateMember from "../Hooks/useCreateMember";
import useAxiosPublic from "../Hooks/useAxiosPublic";

const SocialLogin = () => {
  const { signInWithGoogle } = useAuth();
  const { showToast } = useToast();
  const createMember = useCreateMember();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();

  const location = useLocation();
  const state = location.state || {};
  const { pathname = "/", search = "" } = state;

  const handleSocialLogin = (media) => {
    media()
      .then(async (res) => {
        if (res.user) {
          const memberData = {
            name: res.user.displayName,
            email: res.user.email,
            image: res.user.photoURL,
            role: "user",
          };

          console.log(memberData);

          // check if user already exist on the database;
          const isExistsCheck = await axiosPublic.get(
            `/members/is-exists?email=${res.user.email}`
          );
          const isExists = isExistsCheck.data.exists;

          // console.log("User exists: ", isExists);

          if (!isExists) {
            await createMember(memberData);
          }

          showToast("success", `Welcome back, ${res.user.displayName}!`);
          navigate(pathname + search);
        }
      })
      .catch((error) => {
        console.error(error);

        showToast("error", "An error occurred. Please try again.");
      });
  };

  return (
    <div className="flex gap-5 justify-center">
      <button className="border rounded-full w-12 aspect-square flex justify-center items-center">
        <FaFacebookF className="text-xl" />
      </button>
      <button
        onClick={() => handleSocialLogin(signInWithGoogle)}
        className="border rounded-full w-12 aspect-square flex justify-center items-center"
      >
        <FaGoogle className="text-xl" />
      </button>
      <button className="border rounded-full w-12 aspect-square flex justify-center items-center">
        <FaGithub className="text-xl" />
      </button>
    </div>
  );
};

export default SocialLogin;
