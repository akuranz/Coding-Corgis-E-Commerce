import React, { useState } from "react";
import { useGlobalState } from "../utils/GlobalContext";
import { Link } from "react-router-dom";
import Service from "../components/Service";
import axios from "axios";
// import { loadStripe } from "@stripe/stripe-js";
// import { Elements } from "@stripe/react-stripe-js";
// import CheckoutForm from "../components/CheckoutForm";
import { BankOutlined } from "@ant-design/icons";


// const stripePromise = loadStripe("pk_test_0sjWIbUBj3MgBLTKBi8PbD9J00pMNjWirz");

const Checkout = () => {
  const [global, dispatch] = useGlobalState();
  const [state, setState] = useState({
    billingAddress: "",
    shippingAddress: "",
  });

  const handleInput = ({ target }) => {
    setState({
      ...state,
      [target.name]: target.value,
    });
  };

  const submitPurchase = async () => {
    console.log({
      user_id: global.user._id,
      services: global.serviceIds(),
    });
    // axios
    //   .post("/api/checkout", {
    //     user_id: global.user._id,
    //     service_ids: global.serviceIds(),
    //     ...state,
    //   })
    //   .then((response) => console.log(response))
    //   .catch((err) => console.warn(err));
  };

  return (
    <>
      <ol>
        {global.cart.map((svc, i) => (
          <li key={i + "-service"}>
            {svc.language} {svc.price}
          </li>
        ))}
      </ol>
      <div>
        Total: <h3>{global.cartTotal()}</h3>
      </div>

      <h4> Billing Address </h4>

      <select>
        {global.user.billingAddress.map((addr, i) => (
          <option key={i + "-billing"} value={addr._id}>
            {addr.street}
          </option>
        ))}
      </select>

      <h4> Shipping Address </h4>

      <select>
        {global.user.shippingAddress.map((addr, i) => (
          <option key={i + "-shipping"} value={addr._id}>
            {addr.street}
          </option>
        ))}
      </select>

      <Link
        to={{
          pathname: "/AddAddress",
          state: {
            type: "billingAddress",
          },
        }}
      >
        Add Billing Address
      </Link>

      <Link
        to={{
          pathname: "/AddAddress",
          state: {
            type: "shippingAddress",
          },
        }}
      >
        Add Shipping Address
      </Link>

      <button onClick={submitPurchase}>Submit</button>
    </>
  );
// 	return (
// 		<Elements stripe={stripePromise}>
// 			<h1><BankOutlined /> Checkout</h1>
// 			<CheckoutForm />
// 		</Elements>
// 	);

};

export default Checkout;
