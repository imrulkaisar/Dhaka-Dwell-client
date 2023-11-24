/**
 * ===================================
 * Requirements:
 * ===================================
 *
 * [TODO] 1. Create a footer relevant to your website. Where you should provide social links and other relevant information.
 */

import IconListItem from "../Components/IconListItem";
import Logo from "../Components/Logo";
import SocialIcons from "../Components/SocialIcons";
import { FiPhone, FiMail, FiMapPin, FiClock } from "react-icons/fi";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer
        style={{
          // backgroundImage: `url(${bgStructure})`,
          backgroundColor: "#ffffff",
          backgroundRepeat: "repeat",
          backgroundPosition: "center center",
          backgroundSize: "290px auto",
        }}
        className="border-t pt-8 bg-[url('https://tinyurl.com/4emfuwhz')]"
      >
        <div className="container-area bg-[rgba(0, 0, 0, 0.5)]">
          <div className="py-10 flex flex-col md:flex-row gap-8 justify-between items-center md:order-1">
            <div className="flex-1 w-full order-1">
              <ul className="text-text flex flex-col items-center md:items-start text-sm space-y-3">
                <IconListItem icon={<FiPhone />} link={`tel:09638777844`}>
                  09638777844
                </IconListItem>
                <IconListItem
                  icon={<FiMail />}
                  link={`tel:info@dhakadwell.surge.sh`}
                >
                  info@dhakadwell.surge.sh
                </IconListItem>
                <IconListItem icon={<FiMapPin />}>
                  123 Dhaka Street, Gulshan Gulshan-1, Dhaka 1212
                </IconListItem>
                <IconListItem icon={<FiClock />}>
                  10:00AM - 05:00PM
                </IconListItem>
              </ul>
            </div>
            <div className="flex flex-col flex-1 gap-3 items-center w-full  md:order-1">
              <Logo />
              <SocialIcons className="text-text gap-8 text-2xl pt-2" />
            </div>
            <div className="flex-1 text-center md:text-right order-2 md:order-1">
              <p className="pb-4">
                Discover Gulshan living with DhakaDwell. Contact us, explore
                apartments, and stay updated. Your home, your control.
              </p>
              <Link className="btn p-0 inline border-0">Read more</Link>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between text-sm pb-5">
            <p>© 2023 Dhaka Dwell. All rights reserved.</p>
            <p>Developed by Imrul Kaisar</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
