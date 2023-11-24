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
      <div className="min-h-[600px] bg-[rgba(0,0,0,0.6)] py-28 flex justify-center items-center text-white">
        <div className="text-center max-w-4xl space-y-5">
          <h2 className="font-display font-semibold text-5xl leading-snug">
            Discover Exceptional Living Spaces in Gulshan with DhakaDwell
          </h2>
          <p className="max-w-3xl mx-auto text-lg">
            Explore our diverse range of thoughtfully designed apartments. Find
            your ideal home and experience the ultimate in comfort and
            convenience.
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
