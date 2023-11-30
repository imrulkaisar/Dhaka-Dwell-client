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
import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import CheckoutForm from "../../Components/Dashboard/CheckoutForm";
import useUserData from "../../Hooks/useUserData";
import { useQuery } from "@tanstack/react-query";
import getCurrentMonthAndYear from "../../utils/getCurrentMonth";

// Stripe test publishable API key.
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISH_KEY);

const MakePayments = () => {
  const axiosSecure = useAxiosSecure();
  const [clientSecret, setClientSecret] = useState("");

  //  new code
  const { _id: memberId, name: memberName, email: memberEmail } = useUserData();

  const { data: agreements = [], isPending: isAgreementsPending } = useQuery({
    queryKey: ["agreements", memberId],
    queryFn: async () => {
      try {
        const res = await axiosSecure.get(
          `/agreements/get-agreement?memberId=${memberId}&status=accepted`
        );

        return res.data;
      } catch (error) {
        console.error(error);
      }
    },
    enabled: !!memberId,
  });

  const { apartmentId } = agreements[0] || {};

  const { data: apartment = {}, isPending: isApartmentLoading } = useQuery({
    queryKey: ["apartment details", apartmentId],
    queryFn: async () => {
      try {
        const res = await axiosSecure.get(
          `/apartments/get-apartment-by-id/${apartmentId}`
        );

        return res.data;
      } catch (error) {
        console.error(error);
      }
    },
    enabled: !!apartmentId,
  });

  // console.log(apartment);

  const { floor, block, number: apartmentNo, rent: price } = apartment || {};
  const month = getCurrentMonthAndYear();

  const paymentData = {
    memberId,
    memberName,
    memberEmail,
    apartmentId,
    floor,
    block,
    month,
    price,
    // transactionId,
  };

  // old code

  console.log("Intent Price:", price);

  // Create PaymentIntent
  const createPaymentIntent = async () => {
    try {
      const res = await axiosSecure.post("/payments/intent", { price });

      if (res.data.clientSecret) {
        setClientSecret(res.data.clientSecret);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (price > 0) createPaymentIntent();
  }, []);

  const appearance = {
    theme: "stripe",
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="dashboard-heading">Make Payments</h2>
        <p className="sub-heading">Secure and Convenient Rent Payment</p>
      </div>
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm paymentData={paymentData} />
        </Elements>
      )}
    </div>
  );
};

export default MakePayments;
