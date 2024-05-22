import { PaymentElement } from "@stripe/react-stripe-js";
import { useState } from "react";
import { useStripe, useElements } from "@stripe/react-stripe-js";

export default function CheckoutForm({ price, data }) {
  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsProcessing(true);

    const { error, paymentIntent } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `http://localhost:5173/`,
      },
      redirect: "if_required",
    });

    if (error) {
      setMessage(error.message);
    } else if (paymentIntent && paymentIntent.status === "succeeded") {
      setMessage("Payment status: " + paymentIntent.status);

      try {
        const contributionResponse = await fetch("http://localhost:8080/api/contributions", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            actualPaidPrice: price,
            paymentId: "ABC123", // Placeholder for actual payment ID
            paymentDate: new Date().toISOString().split("T")[0],
            benefitId: data.benefitId,
            backerId: data.backerId,
          }),
        });

        if (!contributionResponse.ok) {
          throw new Error('Error saving contribution');
        }

        window.location.href = `http://localhost:5173/`; 
      } catch (error) {
        console.error('Error saving contribution:', error);
        setMessage("An unexpected error occurred.");
      }
    } else {
      setMessage("An unexpected error occurred.");
    }

    setIsProcessing(false);
  };

  return (
    <form id="payment-form" onSubmit={handleSubmit}>
      <PaymentElement id="payment-element" />
      <button disabled={isProcessing || !stripe || !elements} id="submit">
        <span id="button-text">
          {isProcessing ? "Processing ... " : "Pay now"}
        </span>
      </button>
      {/* Show any error or success messages */}
      {message && <div id="payment-message">{message}</div>}
    </form>
  );
}
