import { Link } from "react-router-dom";
import Divider from "../Components/Divider";
import PageHeader from "../Components/PageHeader";
import SocialLogin from "../Components/SocialLogin";
import vectorImg from "./../assets/images/login.png";

const Register = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
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
              className="w-28"
              src="https://th.bing.com/th/id/OIP.9VU3DQt4lAl5rdZy-XJ78QAAAA?rs=1&pid=ImgDetMain"
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
                <label htmlFor="photURL" className="sr-only">
                  Profile Image Link
                </label>
                <input
                  type="url"
                  className="form-input"
                  id="photURL"
                  name="photURL"
                  placeholder="Profile Image Link"
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
                Login
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
