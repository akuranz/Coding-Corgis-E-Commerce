import React, { useState } from "react";
import { useGlobalState } from "../utils/GlobalContext";
import Service from "../components/Service";
import { Button, Row, Col } from "antd";
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

	const removeService = service => {
		toast("Removed from Cart", { type: "error", autoClose: 2000 });
		console.log("REMOVE", service);
		dispatch({
			type: "CART_REMOVE_SERVICE_BY_ID",
			payload: service._id
		});
	};

	const paymentTotal = state.cart.reduce(function(prev, cur) {
		return prev + cur.price;
	}, 0);

	return (
		<div>
			<Row gutter={16}>
				{state.cart.map((service, i) => {
					return (
						<Service
							key={i + "-service"}
							service={service}
							selected={true}
							handleCart={removeService}
						/>
					);
				})}
				{/* <h1>{service.language}</h1> */}
				{/* <h3>On Sale · ${service.price}</h3> */}
			</Row>
			<Row gutter={16}>
				<Col span={8} />
				<Col span={8}>
					<h4>Total Amount Due: ${paymentTotal}/hr</h4>
				</Col>
				<Col span={8}>
					<StripeCheckout
						stripeKey="pk_test_4TbuO6qAW2XPuce1Q6ywrGP200NrDZ2233"
						token={handleToken}
						amount={service.price * 100}
						name={service.language}
						billingAddress
						shippingAddress
					/>
				</Col>
			</Row>
		</div>
	);
};

export default CheckoutForm;
