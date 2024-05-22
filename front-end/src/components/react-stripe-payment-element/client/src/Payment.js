import { useEffect, useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";

function Payment() {
  const [data, setData] = useState(null);
  const [price, setPrice] = useState(null);
  const [stripePromise, setStripePromise] = useState(null);
  const [clientSecret, setClientSecret] = useState("");

  // Fetch data from the API endpoint
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/payment/readPayment');
        const responseData = await response.json();
        console.log('API response data:', responseData); // Log the response data
        setData(responseData);
        setPrice(responseData.actualPaidPrice);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  // Load Stripe publishable key
  useEffect(() => {
    const loadStripeKey = async () => {
      try {
        const response = await fetch("/config");
        const { publishableKey } = await response.json();
        setStripePromise(loadStripe(publishableKey));
      } catch (error) {
        console.error('Error loading Stripe key:', error);
      }
    };

    loadStripeKey();
  }, []);

  // Create payment intent
  useEffect(() => {
    const createPaymentIntent = async () => {
      try {
        if (price !== null && data !== null) { // Ensure data is loaded
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

          const paymentIntentData = await paymentIntentResponse.json();
          setClientSecret(paymentIntentData.clientSecret);
        }
      } catch (error) {
        console.error('Error creating payment intent:', error);
      }
    };

    if (price !== null && data !== null) { // Ensure both price and data are available
      createPaymentIntent();
    }
  }, [price, data]);

  return (
    <>
      <h1>Raise Rally: Payment Processing via Stripe</h1>
      {clientSecret && stripePromise && (
        <Elements stripe={stripePromise} options={{ clientSecret }}>
          <CheckoutForm price={price} data={data}/>
        </Elements>
      )}
    </>
  );
}

export default Payment;
