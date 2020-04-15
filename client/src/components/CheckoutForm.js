import React, { useState } from "react";
// import { loadStripe } from "@stripe/stripe-js";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { toast } from "react-toastify";
import { useGlobalState } from "../utils/GlobalContext";

import "react-toastify/dist/ReactToastify.css";

toast.configure();

const CheckoutForm = () => {
  const [global, dispatch] = useGlobalState();
  // const [service] = useState({
  //   language: "",
  //   price: null,
  //   coder: "",
  // });

  // const handleToken = async (token, addresses) => {
  //   console.log("token", token);
  //   const response = await axios.post("/api/checkout", { token, service });
  //   const { status } = response.data;
  //   console.log("Response:", response.data);
  //   if (status === "success") {
  //     toast("Success! Check email for details", { type: "success" });
  //   } else {
  //     toast("Something went wrong", { type: "error" });
  //   }
  // };

  return (
    <div className="container">
      {/* <div className="product">
        <h1>{service.language}</h1>
        <h3>On Sale · ${service.price}</h3>
      </div>
      <StripeCheckout
        stripeKey="pk_test_4TbuO6qAW2XPuce1Q6ywrGP200NrDZ2233"
        token={handleToken}
        amount={service.price * 100}
        name=""
        billingAddress
        shippingAddress
      /> */}
    </div>
  );
};

export default CheckoutForm;
