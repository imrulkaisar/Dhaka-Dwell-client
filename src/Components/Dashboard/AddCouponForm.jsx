import { useNavigate } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useToast from "../../Hooks/useToast";
import { useQueryClient } from "@tanstack/react-query";

const AddCouponForm = () => {
  const axiosSecure = useAxiosSecure();
  const { showToast } = useToast();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const code = form.code.value;
    const description = form.description.value;
    const discount = form.discount.value;
    const discountType = form.discountType.value;
    const expiredDate = new Date(form.expiredDate.value);
    const maxUse = form.maxUse.value;
    const allowedMembers = form.allowedMembers.value === "all" && [];

    const couponData = {
      code,
      description,
      discount,
      discountType,
      expiredDate,
      maxUse,
      allowedMembers,
    };

    try {
      const res = await axiosSecure.post("/coupons/create", couponData);

      if (res.data.success) {
        showToast("success", "Coupon added.");
        navigate("/dashboard/coupons");
        queryClient.invalidateQueries("all coupons");
      } else {
        showToast("error", res.data.message);
      }
    } catch (error) {
      console.error(error);
    }

    console.log(couponData);
  };
  return (
    <form className="grid md:grid-cols-2 gap-5" onSubmit={handleSubmit}>
      <div className="form-group col-span-2">
        <label htmlFor="code" className="sr-only">
          Coupon Code
        </label>
        <input
          type="text"
          id="code"
          name="code"
          placeholder="Coupon Code"
          className="form-input"
        />
      </div>
      <div className="form-group col-span-2">
        <label htmlFor="description" className="sr-only">
          Description
        </label>
        <textarea
          id="description"
          name="description"
          placeholder="Description"
          className="form-input"
        ></textarea>
      </div>
      <div className="form-group">
        <label htmlFor="discount" className="sr-only">
          Discount
        </label>
        <input
          type="number"
          id="discount"
          name="discount"
          placeholder="Discount amount"
          className="form-input"
        />
      </div>
      <div className="form-group">
        <label htmlFor="discountType" className="sr-only">
          Discount Type
        </label>
        <select
          id="discountType"
          name="discountType"
          placeholder="Discount amount"
          className="form-input"
          disabled
          defaultValue="percentage"
        >
          <option value="percentage">Percentage</option>
          <option value="fixed">Fixed</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="expiredDate" className="sr-only">
          ExpireDate
        </label>
        <input
          type="datetime-local"
          id="expiredDate"
          name="expiredDate"
          className="form-input"
        />
      </div>
      <div className="form-group">
        <label htmlFor="maxUse" className="sr-only">
          Max Use
        </label>
        <input
          type="number"
          id="maxUse"
          name="maxUse"
          placeholder="Max Use (Number)"
          className="form-input"
        />
      </div>
      <div className="form-group col-span-2">
        <label htmlFor="allowedMembers" className="sr-only">
          Allowed Members
        </label>
        <select
          id="allowedMembers"
          name="allowedMembers"
          placeholder="Coupon Code"
          className="form-input"
        >
          <option value="all">All users</option>
        </select>
      </div>
      <button className="btn btn-primary col-span-2">Add Coupon</button>
    </form>
  );
};

export default AddCouponForm;
