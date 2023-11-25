/**
 * ========================================
 * Requirements:
 * **************
 * 1. Navbar has a logo+website name, Home, Apartment, and Login icon(conditional). If the user is logged in, his/her profile picture should appear on the navbar replacing the login icon.
 * 2. If the user clicks on the profile picture, a drop-down will appear with the following items: User name (not clickable), Dashboard, and Logout button.
 * 3.
 */

import { Link, NavLink, useNavigate } from "react-router-dom";
import Logo from "../Components/Logo";
import useAuth from "../Hooks/useAuth";

import { FiUserPlus } from "react-icons/fi";
import { useEffect, useState } from "react";

const Header = () => {
  const { user, loading, logOut } = useAuth();
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOut();
      setShowPopup(false);

      navigate("/login");
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    setShowPopup(false);
  }, [user]);

  return (
    <header className="py-5 text-white -mb-[90px] relative">
      <div className="container-area flex justify-between items-center">
        <Logo />
        <div className="flex items-center justify-center gap-8">
          <NavLink to="/apartments">
            <span className="text-sm uppercase tracking-widest">
              Our Apartments
            </span>
          </NavLink>
          <div className="divider w-[2px] h-4 bg-white"></div>
          <div className="user">
            {!loading && user?.accessToken ? (
              <div className="relative">
                <button onClick={() => setShowPopup(!showPopup)}>
                  <img
                    className="w-10 aspect-square rounded-full bg-white p-[2px]"
                    src={user?.photoURL}
                    alt=""
                  />
                </button>
                {showPopup && (
                  <div className="absolute bg-white py-2 px-5 rounded-md text-secondary whitespace-nowrap right-0 space-y-2 min-w-[200px] border shadow-lg">
                    <h4 className="text-lg font-semibold font-display">
                      {user?.displayName}
                    </h4>
                    <hr />
                    <div className="flex flex-col gap-2">
                      <Link to="/dashboard">Dashboard</Link>
                      <button
                        className="text-sm w-full bg-dark text-white py-1 rounded-md"
                        onClick={handleLogout}
                      >
                        Logout
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <>
                <Link to="/login">
                  <FiUserPlus className="text-2xl" />
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
