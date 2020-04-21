import React from "react";
import { Link } from "react-router-dom";
import { useGlobalState } from "../utils/GlobalContext";
import Service from "../components/Service";
import { Button, Row, Col } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

toast.configure();

const Cart = () => {
	const [state, dispatch] = useGlobalState();
	console.log("This is the state inside cart.js", state);

	const removeService = service => {
		toast("Removed from Cart", { type: "error", autoClose: 2000 });
		console.log("REMOVE", service);
		dispatch({
			type: "CART_REMOVE_SERVICE_BY_ID",
			payload: service._id
		});
	};

	const orderServices = () => {
		const serviceIDs = state.cart.map(s => s._id);

		console.log(serviceIDs);
	};

	// get sum of msgCount prop across all objects in array
	const priceTotal = state.cart.reduce(function(prev, cur) {
		return prev + cur.price;
	}, 0);
	console.log("Total Price:", priceTotal);

	console.log("state.cart", state.cart);

	// const priceTwo
	return (
		<div>
			<h1>
				<ShoppingCartOutlined /> Your Cart
			</h1>
			<Row gutter={16}>
				{state.cart[0] ? (
					state.cart.map((service, i) => {
						return (
							<Service
								key={i + "-service"}
								service={service}
								selected={true}
								handleCart={removeService}
							/>
						);
					})
				) : (
					<div
						className="container"
						style={{ padding: 25, display: "flex", justifyContent: "center" }}
					>
						<h4>You don't have anything in your cart!</h4>
					</div>
				)}
			</Row>
			<Row>
				<h5>How do payments work?</h5>
				<p>
					After you submit your order, you will be emailed an invoice. The first
					hour of each service will be billed upfront, and any additional time
					spent by the coder will be recorded and billed to you after the
					service is fully delivered.
				</p>
				<p>
					We do not handle payments, those are between you and the coder
					providing the service. We do however keep in close contact with our
					coders and if they do not receive payment within 10 days you will
					receive a penalty fee invoice from us.
				</p>
			</Row>
			<Row gutter={16}>
				<Col span={8} offset={8}>
					<h4>Due Up front: ${priceTotal}</h4>
				</Col>
				<Col span={8}>
					<Link to="/checkout">
						<Button
							block
							onClick={orderServices}
							type="primary"
							shape="round"
							size="large"
						>
							CONTINUE TO CHECKOUT
						</Button>
					</Link>
				</Col>
			</Row>
		</div>
	);
};

export default Cart;
