import React from "react";
// import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../components/CheckoutForm";
import { BankOutlined } from "@ant-design/icons";

// const stripePromise = loadStripe("pk_test_0sjWIbUBj3MgBLTKBi8PbD9J00pMNjWirz");

const Checkout = () => {
	return (
		<>
			<h1>
				<BankOutlined /> Checkout
			</h1>
			<CheckoutForm />
		</>
	);
};

export default Checkout;
