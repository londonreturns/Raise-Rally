import { useEffect, useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";

function Payment() {
  const [data, setData] = useState(null);
  const [price, setPrice] = useState(null);
  const [stripePromise, setStripePromise] = useState(null);
  const [clientSecret, setClientSecret] = useState("");

  // Fetch payment data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/payment/readPayment');
        const responseData = await response.json();
        setData(responseData);
        setPrice(responseData.actualPaidPrice);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  // Fetch Stripe publishable key
  useEffect(() => {
    fetch("/config").then(async (r) => {
      const { publishableKey } = await r.json();
      setStripePromise(loadStripe(publishableKey));
    });
  }, []);

  // Create payment intent and post contribution data
  useEffect(() => {
    const createPaymentIntent = async () => {
      try {
        const paymentIntentResponse = await fetch("/create-payment-intent", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            currency: "NPR",
            amount: price,
            automatic_payment_methods: { enabled: true },
          }),
        });

        const { clientSecret } = await paymentIntentResponse.json();
        setClientSecret(clientSecret);

        // Post contribution data after getting client secret
        await fetch("http://localhost:8080/api/contributions", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            actualPaidPrice: price,
            paymentDate: new Date().toISOString().split("T")[0], // Use the current date
            benefitId: 2,
            backerId: 1,
          }),
        });
      } catch (error) {
        console.error('Error creating payment intent or posting contribution:', error);
      }
    };

    if (price !== null) {
      createPaymentIntent();
    }
  }, [price]);

  return (
    <>
      <h1>Raise Rally: Payment Processing via Stripe</h1>
      {clientSecret && stripePromise && (
        <Elements stripe={stripePromise} options={{ clientSecret }}>
          <CheckoutForm />
        </Elements>
      )}
    </>
  );
}

export default Payment;
