import { Link, useLocation, useNavigate } from "react-router-dom";
import Divider from "../Components/Divider";
import PageHeader from "../Components/PageHeader";
import SocialLogin from "../Components/SocialLogin";
import vectorImg from "./../assets/images/login.png";
import useAuth from "../Hooks/useAuth";
import { useState } from "react";
import useToast from "../Hooks/useToast";
import useCreateMember from "../Hooks/useCreateMember";

const Register = () => {
  const { createUser, updateUser } = useAuth();
  const { showToast } = useToast();
  const createMember = useCreateMember();

  const defaultUserImage = "https://tinyurl.com/2hazwtup";
  const [profileImg, setProfileImg] = useState(defaultUserImage);
  const navigate = useNavigate();

  const location = useLocation();
  const state = location.state || {};
  const { pathname = "/dashboard/index", search = "" } = state;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;

    try {
      const response = await createUser(email, password);

      if (response.user) {
        await updateUser({
          displayName: name,
          photoURL,
        });

        const memberData = {
          name,
          email,
          image: photoURL,
          role: "user",
        };

        // insert user data to the database
        await createMember(memberData);

        showToast("success", "User crated successfully!");

        navigate(pathname + search);
      }
    } catch (error) {
      console.error(error);

      showToast("error", error.message);
    }
  };
  return (
    <div>
      <PageHeader
        title="Register"
        description="Join DhakaDwell: Unlock a World of Convenient Building Management."
      />

      <section className="py-28 bg-bgGray">
        <div className="container-area flex gap-10 justify-start">
          <div className="w-full max-w-sm flex flex-col items-center border px-10 py-16 rounded-lg shadow-lg space-y-8 bg-white">
            <img
              className="w-28 aspect-square rounded-full object-cover border-2"
              src={profileImg ? profileImg : defaultUserImage}
              alt=""
            />
            <form className="w-full space-y-5" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name" className="sr-only">
                  Your Name
                </label>
                <input
                  type="text"
                  className="form-input"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="photoURL" className="sr-only">
                  Profile Image Link
                </label>
                <input
                  type="url"
                  className="form-input"
                  id="photoURL"
                  name="photoURL"
                  placeholder="Profile Image Link"
                  onChange={(e) => setProfileImg(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email" className="sr-only">
                  Email Address
                </label>
                <input
                  type="email"
                  className="form-input"
                  id="email"
                  name="email"
                  placeholder="Email Address"
                />
              </div>
              <div className="form-group">
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  type="password"
                  className="form-input"
                  id="password"
                  name="password"
                  placeholder="Password"
                />
              </div>
              <button className="btn btn-primary w-full hover:bg-primaryShadow">
                Create account
              </button>
            </form>
            <Divider text="sign in with" />
            <SocialLogin />

            <footer className="space-y-3">
              <p className="text-secondary">
                Already registered?{" "}
                <Link className="font-semibold" to="/login">
                  Go to log in
                </Link>
              </p>
            </footer>
          </div>
          <div className="p-16">
            <img src={vectorImg} alt="vector image" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;
