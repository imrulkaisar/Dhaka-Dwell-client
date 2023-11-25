import festivalImage from "./../../assets/images/festival-image.jpeg";
import couponImg from "./../../assets/images/coupon.png";
import useToast from "../../Hooks/useToast";

const CouponSection = () => {
  const { showToast } = useToast();
  const coupon = "EID2023";

  const copyToClipBoard = () => {
    navigator.clipboard.writeText(coupon).then(() => {
      showToast("success", "Coupon copied!");
    });
  };
  return (
    <section className="py-20">
      <div className="container-area grid lg:grid-cols-2 gap-14">
        <div>
          <img src={festivalImage} alt="" />
        </div>
        <div>
          <h2 className="section-heading">Festival Coupon Extravaganza</h2>
          <p className="py-5 text-secondary">
            Experience the joy of savings with our Festival Coupon! Specially
            crafted for you, this exclusive offer brings extra delight to your
            festive celebrations. Enjoy unique discounts on gifts, feasts, and
            more. Don't miss out—unwrap the magic of savings today!
          </p>
          <img
            onClick={copyToClipBoard}
            className="max-w-sm cursor-pointer"
            src={couponImg}
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default CouponSection;
