import Divider from "../Divider";
import sectionBg from "./../../assets/bg-strok.png";

const AboutSection = () => {
  return (
    <section
      className="py-20 bg-bgGray"
      style={{
        backgroundImage: `url("${sectionBg}")`,
      }}
    >
      <div className="container-area text-center max-w-4xl">
        <h2 className="section-heading leading-tight">
          Elevate Your Living Experience at{" "}
          <span className="text-primary">DhakaDwell</span>
        </h2>
        <Divider text="<>" />
        <p className="text-xl">A Testament to Luxury and Comfort in Gulshan</p>
        <p className="py-8 leading-relaxed lg:px-5 text-secondary">
          Welcome to DhakaDwell, where modern living meets timeless comfort in
          the heart of Gulshan. Our architectural masterpiece stands as a
          testament to elegance and sophistication, offering residents a unique
          blend of luxury and convenience. Located in the upscale neighborhood
          of Gulshan, DhakaDwell provides easy access to local amenities,
          educational institutions, and a vibrant social scene. With
          thoughtfully curated amenities, community-focused living, and a
          commitment to quality, DhakaDwell is not just a residence; it's a
          lifestyle. Join us in experiencing the epitome of contemporary living,
          where every detail is crafted to elevate your living experience.
        </p>
        <img
          className="mx-auto"
          src="https://themebubble.com/demo/hotelluxe/wp-content/uploads/2018/04/signature.png"
          alt=""
        />
      </div>
    </section>
  );
};

export default AboutSection;
