import { Link, useLocation, useNavigate } from "react-router-dom";
import Divider from "../Components/Divider";
import PageHeader from "../Components/PageHeader";
import SocialLogin from "../Components/SocialLogin";
import useAuth from "../Hooks/useAuth";
import useToast from "../Hooks/useToast";

const Login = () => {
  const { logInWithEmailAndPassword, updateUser } = useAuth();
  const { showToast } = useToast();
  const navigate = useNavigate();

  const location = useLocation();
  const state = location.state || {};
  const { pathname = "/dashboard/index", search = "" } = state;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    const email = form.email.value;
    const password = form.password.value;

    try {
      const response = await logInWithEmailAndPassword(email, password);

      if (response.user) {
        showToast("success", "Welcome back!");

        navigate(pathname + search);
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <PageHeader
        title="Login"
        description="Access Your DhakaDwell Account. Your Gateway to Effortless Building Management."
      />

      <section className="py-28 bg-bgGray">
        <div className="container-area flex gap-10 justify-start">
          <div className="">
            <img
              src="https://img.freepik.com/premium-vector/login-concept-illustration_65141-421.jpg"
              alt=""
            />
          </div>
          <div className="w-full max-w-sm flex flex-col items-center border px-10 py-16 rounded-lg shadow-lg space-y-8 bg-white">
            <img
              className="w-28"
              src="https://th.bing.com/th/id/OIP.9VU3DQt4lAl5rdZy-XJ78QAAAA?rs=1&pid=ImgDetMain"
              alt=""
            />
            <form className="w-full space-y-5" onSubmit={handleSubmit}>
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
                New here?{" "}
                <Link className="font-semibold" to="/register">
                  Create a New Account
                </Link>
              </p>
            </footer>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
