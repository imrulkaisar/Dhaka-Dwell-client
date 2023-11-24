/**
 * ========================================
 * Requirements:
 * **************
 * 1. Navbar has a logo+website name, Home, Apartment, and Login icon(conditional). If the user is logged in, his/her profile picture should appear on the navbar replacing the login icon.
 * 2. If the user clicks on the profile picture, a drop-down will appear with the following items: User name (not clickable), Dashboard, and Logout button.
 * 3.
 */

import { Link, NavLink } from "react-router-dom";
import Logo from "../Components/Logo";
import useAuth from "../Hooks/useAuth";

import { FiUserPlus } from "react-icons/fi";

const Header = () => {
  const { user } = useAuth();

  return (
    <header className="py-5 text-white -mb-[90px]">
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
            {user.email ? (
              <>
                <div className="">Logout</div>
              </>
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
