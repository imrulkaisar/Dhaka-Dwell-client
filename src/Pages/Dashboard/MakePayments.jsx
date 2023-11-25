/**
 * ==============================
 * Requirements
 * ==============================
 *
 * [TASK] Make payment page
 *
 * [TODO] 1. In this page there will be a form containing some fields named 
          A. member 
          B. email(read-only), 
          C. floor(read-only), 
          D. block name(read-only), 
          E. apartment no(read-only), 
          F. rent(read-only), 
          G. month(which month’s rent you want to pay) and 
          H. a submit/pay button.
 * [TODO] 2. On clicking on the pay button member will be redirected to a page where he/she will be able to make payment. You have to add a field and a button where members will be able to apply coupons. On clicking the button if the coupon is valid then the rent will be reduced by the given percentage on the coupon. (see the bonus requirement-4 for rest)
 * [TODO] 3. [Bonus] On successful payment the data(given in requirement-11) will be stored in the database and a successful message will be shown.
 * [TODO] 4.  
 */

import useAuth from "../../Hooks/useAuth";

const MakePayments = () => {
  const { user } = useAuth();

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="dashboard-heading">Make Payments</h2>
        <p className="sub-heading">Secure and Convenient Rent Payment</p>
      </div>
      <form className="w-full max-w-2xl grid md:grid-cols-2 gap-x-8 gap-y-5">
        <div className="form-group">
          <label htmlFor="name" className="">
            Member
          </label>
          <input
            type="text"
            className="form-input bg-white"
            id="name"
            name="name"
            placeholder="Member"
            defaultValue={user?.displayName}
            readOnly={true}
          />
        </div>
        <div className="form-group">
          <label htmlFor="name" className="">
            Email
          </label>
          <input
            type="text"
            className="form-input bg-white"
            id="name"
            name="name"
            placeholder="Email"
            defaultValue={user?.email}
            readOnly={true}
          />
        </div>
        <div className="form-group">
          <label htmlFor="name" className="">
            Floor
          </label>
          <input
            type="text"
            className="form-input bg-white"
            id="name"
            name="name"
            placeholder="Floor"
            defaultValue={`7`}
            readOnly={true}
          />
        </div>
        <div className="form-group">
          <label htmlFor="name" className="">
            Block name
          </label>
          <input
            type="text"
            className="form-input bg-white"
            id="name"
            name="name"
            placeholder="Floor"
            defaultValue={`7B`}
            readOnly={true}
          />
        </div>
        <div className="form-group">
          <label htmlFor="name" className="">
            Apartment no
          </label>
          <input
            type="text"
            className="form-input bg-white"
            id="name"
            name="name"
            placeholder="Apartment no"
            defaultValue={`702`}
            readOnly={true}
          />
        </div>
        <div className="form-group">
          <label htmlFor="name" className="">
            Month
          </label>
          <input
            type="text"
            className="form-input bg-white"
            id="name"
            name="name"
            placeholder="Apartment no"
            defaultValue={`December`}
            readOnly={true}
          />
        </div>
        <div className="form-group col-span-2">
          <label htmlFor="name" className="">
            Monthly Rent
          </label>
          <input
            type="text"
            className="form-input bg-white"
            id="name"
            name="name"
            placeholder="Apartment no"
            defaultValue={`৳15500`}
            readOnly={true}
          />
        </div>
        <button className="btn btn-primary">Pay rent</button>
      </form>
    </div>
  );
};

export default MakePayments;
