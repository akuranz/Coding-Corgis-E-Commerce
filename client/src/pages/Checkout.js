import React from "react";
import { BankOutlined } from "@ant-design/icons";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../components/CheckoutForm";

const stripePromise = loadStripe("pk_test_0sjWIbUBj3MgBLTKBi8PbD9J00pMNjWirz");

const Checkout = () => {
	return (
		<Elements stripe={stripePromise}>
			<h1><BankOutlined /> Checkout</h1>
			<CheckoutForm />
		</Elements>
	);
};

export default Checkout;
