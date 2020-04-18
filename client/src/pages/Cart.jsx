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
			<Row gutter={16}>
				<Col span={8} />
				<Col span={8}>
					<h4>Total Amount Due: ${priceTotal}/hr</h4>
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
							CHECKOUT
						</Button>
					</Link>
				</Col>
			</Row>
		</div>
	);

};

export default Cart;
