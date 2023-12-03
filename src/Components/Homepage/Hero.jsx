import { Link } from "react-router-dom";
import heroImage from "./../../assets/images/home-hero.jpg";

const Hero = () => {
  return (
    <section
      style={{
        backgroundImage: `url("${heroImage}")`,
      }}
      className="bg-cover bg-center"
    >
      <div className="min-h-[600px] bg-[rgba(0,0,0,0.6)] px-5 lg:px-0 py-28 flex justify-center items-center text-white">
        <div className="text-center max-w-4xl space-y-5">
          <h2 className="section-heading text-3xl lg:text-5xl">
            Welcome to DhakaDwell: Your Gateway to Effortless Building
            Management
          </h2>
          <p className="max-w-3xl mx-auto text-lg">
            Experience the ease of managing your Gulshan property from the
            comfort of your home. DhakaDwell brings convenience and control to
            your fingertips.
          </p>
          <p></p>
          <Link
            to="/apartments"
            className="btn btn-outline inline-block border-white hover:btn-primary"
          >
            View Apartments
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
