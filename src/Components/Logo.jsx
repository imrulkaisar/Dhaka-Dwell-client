import { Link } from "react-router-dom";
import logoImg from "./../assets/Logo.png";

const Logo = () => {
  return (
    <Link to="/">
      <div className="flex gap-2 items-center">
        <img
          className="w-12 bg-white rounded-full"
          src={logoImg}
          alt="Dhaka Dwell Logo"
        />
        <span className="font-display font-bold text-inherit text-2xl">
          Dhaka<span className="text-primary">Dwell</span>
        </span>
      </div>
    </Link>
  );
};

export default Logo;
