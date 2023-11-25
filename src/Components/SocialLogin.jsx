import { FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa";

const SocialLogin = () => {
  return (
    <div className="flex gap-5 justify-center">
      <button className="border rounded-full w-12 aspect-square flex justify-center items-center">
        <FaFacebookF className="text-xl" />
      </button>
      <button className="border rounded-full w-12 aspect-square flex justify-center items-center">
        <FaGoogle className="text-xl" />
      </button>
      <button className="border rounded-full w-12 aspect-square flex justify-center items-center">
        <FaGithub className="text-xl" />
      </button>
    </div>
  );
};

export default SocialLogin;
