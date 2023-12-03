/**
 * ==============================
 * Requirements
 * ==============================
 *
 * [TASK] Coupons management page:
 *
 * [TODO] 1. Show all the coupons in tabular form added in the database by the owner/admin.
 * [TODO] 2. Anywhere in this page there will be an add button. On clicking that there will be a modal with some fields named coupon code, discount percentage, coupon description, submit button.
 * [TODO] 3. On clicking the submit button the coupon data will be stored in the database.
 * [TODO] 4. [Bonus] The admin/owner will be able to change the availability of a coupon.
 */

import { useQuery } from "@tanstack/react-query";
import AddCouponForm from "../../Components/Dashboard/AddCouponForm";
import Modal from "../../Components/Modal";
import useModal from "../../Contexts/useModal";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import CouponRow from "../../Components/Dashboard/CouponRow";

const ManageCoupons = () => {
  const { isOpen, openModal, closeModal } = useModal();
  const axiosSecure = useAxiosSecure();

  const { data: coupons = [] } = useQuery({
    queryKey: ["all coupons"],
    queryFn: async () => {
      try {
        const res = await axiosSecure.get("/coupons/get-all");

        return res.data;
      } catch (error) {
        console.error(error);
      }
    },
  });

  // console.log(coupons);
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="dashboard-heading">Manage Coupons</h2>
        <p className="sub-heading">
          Unlock Exclusive Savings and Enjoy Discounts on Your Payments
        </p>
      </div>

      {/* table */}

      <div className="relative max-w-[90vw] overflow-x-auto shadow-md sm:rounded-lg">
        <div className="flex flex-column sm:flex-row flex-wrap space-y-4 sm:space-y-0 items-center justify-between pb-4">
          <div>
            <button
              onClick={openModal}
              data-dropdown-toggle="dropdownRadio"
              className="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5 capitalize"
              type="button"
            >
              Add new coupon
            </button>
          </div>

          {isOpen && (
            <Modal onClose={closeModal}>
              <div className="space-y-4">
                <h3 className="dashboard-heading">Add new Coupon</h3>
                <AddCouponForm />
              </div>
            </Modal>
          )}

          <label htmlFor="table-search" className="sr-only">
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 rtl:inset-r-0 rtl:right-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-500"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <input
              type="text"
              id="table-search"
              className="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Search for items"
            />
          </div>
        </div>
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs uppercase bg-gray-700 text-gray-300">
            <tr>
              <th scope="col" className="p-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-all-search"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <label htmlFor="checkbox-all-search" className="sr-only">
                    checkbox
                  </label>
                </div>
              </th>
              <th scope="col" className="px-6 py-3">
                Coupon Code
              </th>
              <th scope="col" className="px-6 py-3 whitespace-nowrap">
                Discount Amount
              </th>
              <th scope="col" className="px-6 py-3">
                Discount Type
              </th>
              <th scope="col" className="px-6 py-3">
                Expire Date
              </th>
              <th scope="col" className="px-6 py-3">
                Max Use
              </th>
            </tr>
          </thead>
          <tbody>
            {coupons.map((coupon) => (
              <CouponRow key={coupon._id} data={coupon} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageCoupons;
