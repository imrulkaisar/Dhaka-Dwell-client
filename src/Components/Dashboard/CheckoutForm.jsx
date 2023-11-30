import {
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import useToast from "../../Hooks/useToast";

const CheckoutForm = () => {
  const { user } = useAuth();
  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [transactionId, setTransactionId] = useState(null);
  const { showToast } = useToast();

  const stripe = useStripe();
  const elements = useElements();

  const paymentElementOptions = {
    layout: "tabs",
  };

  useEffect(() => {
    if (!stripe) {
      return;
    }

    const clientSecret = new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret"
    );

    if (!clientSecret) {
      return;
    }

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      switch (paymentIntent.status) {
        case "succeeded":
          setMessage(`Payment succeeded! Transaction ID: ${paymentIntent.id}`);
          break;
        case "processing":
          setMessage("Your payment is processing.");
          break;
        case "requires_payment_method":
          setMessage("Your payment was not successful, please try again.");
          break;
        default:
          setMessage("Something went wrong.");
          break;
      }
    });
  }, [stripe]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;

    // const memberId

    if (!stripe || !elements) {
      // Stripe.js hasn't yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    setIsLoading(true);

    const { error, paymentIntent } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Make sure to change this to your payment completion page
        // return_url: `${import.meta.env.VITE_LIVE_CLIENT}/dashboard/payment-history`,
        return_url: `http://localhost:5173/dashboard/payment-history`,
      },
    });

    // This point will only be reached if there is an immediate error when
    // confirming the payment. Otherwise, your customer will be redirected to
    // your `return_url`. For some payment methods like iDEAL, your customer will
    // be redirected to an intermediate site first to authorize the payment, then
    // redirected to the `return_url`.
    if (error.type === "card_error" || error.type === "validation_error") {
      setMessage(error.message);
    } else {
      setTransactionId(paymentIntent.id);
      setMessage(`Transaction ID: ${paymentIntent.id}`);
    }

    setIsLoading(false);

    showToast("success", message);
  };

  return (
    <div>
      <form
        id="payment-form"
        onSubmit={handleSubmit}
        className="w-full max-w-2xl grid md:grid-cols-2 gap-x-8 gap-y-5"
      >
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
        <div className="col-span-2">
          <PaymentElement
            id="payment-element"
            options={paymentElementOptions}
          />
        </div>
        <button className="btn btn-primary">Pay rent</button>
      </form>
    </div>
  );
};

export default CheckoutForm;
