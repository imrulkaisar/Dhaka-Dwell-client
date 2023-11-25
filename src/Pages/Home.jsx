/**
 * ========================================
 * Requirements:
 * =========================================
 *
 * [TODO] 1. Create a fancy banner with some beautiful images of the building or apartments. (Do not use multiple apartment images. Implement a feature for automatic slide on the banner.
 * [TODO] 2. Note: Do other necessary beatifications of this section.
 * [Done] 3. Create a section named about the building where you need to read some details about the Building. Make this details section fancy with good typography.
 * [TODO] 4. You have to show the coupons in a fancy way in any place of your home page where users/members will be able to easily see this.
 * [TODO] 5. Create a section where you have to provide the details about your apartment’s location and how to get there. You may also add an npm package for map or an image.
 * [TODO] 6. Note: Do other necessary beatifications of this section.
 */

import AboutSection from "../Components/Homepage/AboutSection";
import CouponSection from "../Components/Homepage/CouponSection";
import Hero from "../Components/Homepage/Hero";

const Home = () => {
  return (
    <div className="">
      <Hero />
      <AboutSection />
      <CouponSection />

      <section>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7301.73405672412!2d90.41182894562589!3d23.787748981982368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7d4cd33f293%3A0x4eddaf3a21ad2f6b!2sGulshan-1%20Dhaka!5e0!3m2!1sen!2sbd!4v1700913752032!5m2!1sen!2sbd"
          width="100%"
          height="300"
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </section>
    </div>
  );
};

export default Home;
