import React, { useState, useEffect } from "react";
import { useGlobalState } from "../utils/GlobalContext";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import API from "../utils/API";
import Service from "../components/Service";
import { Button, Row, Col, Select, Form, Input } from "antd";

import "react-toastify/dist/ReactToastify.css";

toast.configure();

const { Option } = Select;

const layout = {
	labelCol: {
		span: 4
	},
	wrapperCol: {
		span: 20
	}
};

const CheckoutForm = () => {
	const [global, dispatch] = useGlobalState();
	const [state, setState] = useState({
		...global.user,
		billingAddress: global.user.billingAddress[0] || { _id: "" }
	});
	const [loading, setLoading] = useState(false);
	console.log("GLobal Billing Address", global.user.billingAddress);

	console.log(global);

	const enterLoading = () => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
		}, 8000);
	};

	const removeService = service => {
		toast("Removed from Cart", { type: "error", autoClose: 2000 });
		console.log("REMOVE", service);
		dispatch({
			type: "CART_REMOVE_SERVICE_BY_ID",
			payload: service._id
		});
	};

	const handleInput = ({ target }) => {
		setState({
			...state,
			[target.name]: target.value
		});
	};

	const submitPurchase = async () => {
		enterLoading();
		try {
			const response = await axios.post("/api/checkout", {
				...state,
				purchased_service_ids: global.serviceIds()
			});
			console.log("info to db", response);

			toast(
				`Purchase Complete! A confirmation email has been sent to ${global.user.email}`,
				{ type: "success", autoClose: 8000 }
			);
			setLoading(false);
			// const message = await axios.post("/send", {
			//   ...state,
			//   firstName: global.user.firstName,
			//   lastName: global.user.lastName,
			//   email: global.user.email,
			//   // message: message,
			// });
			// console.log("info to customer", message);
		} catch (error) {
			console.warn(error);
		}
	};

	function handleChange(value) {
		console.log(`selected ${value}`);
	}

	return (
		<>
			<Row gutter={16}>
				{global.cart.map((svc, i) => {
					return (
						<Service
							key={i + "-service"}
							service={svc}
							selected={true}
							handleCart={removeService}
						/>
					);
				})}
			</Row>
			<Row gutter={16}>
				<Col span={8}>
					<h5>Remember!</h5>
					<p>
						We do not handle payments, those are between you and the coder
						providing the service. We do however keep in close contact with our
						coders and if they do not receive payment within 10 days you will
						receive a penalty fee invoice from us.
					</p>
					<h4>Due Up front: ${global.cartTotal()}</h4>
				</Col>
				<Col span={16}>
					<h5>Info for the Coder:</h5>
					<Form {...layout}>
						<Form.Item
							rules={[{ required: true }]}
							label="First Name"
							type="text"
							id="firstName"
							name="firstName"
							value={state.firstName}
							onChange={handleInput}
						>
							<Input name="firstName" placeholder="First Name" />
						</Form.Item>
						<Form.Item
							rules={[{ required: true }]}
							label="Last Name"
							type="text"
							id="lastName"
							name="lastName"
							value={state.lastName}
							onChange={handleInput}
						>
							<Input name="firstName" placeholder="Last Name" />
						</Form.Item>
						<Form.Item
							rules={[{ required: true }]}
							label="Email"
							type="text"
							id="email"
							name="email"
							value={state.email}
							onChange={handleInput}
						>
							<Input name="email" placeholder="Email" />
						</Form.Item>
						<Form.Item
							label="Order Details"
							type="text"
							id="details"
							name="details"
							value={state.details}
							onChange={handleInput}
						>
							<Input.TextArea
								name="details"
								placeholder="Please give as much initial detail about what you require from this service and the Coder will be in contact if they need any more information"
							/>
						</Form.Item>
						<Form.Item
							rules={[{ required: true }]}
							label="Billing Address"
						>
							<Select
								value={state.billingAddress._id}
								style={{ width: 200, marginBottom: 16, marginRight: 16 }}
								onChange={handleChange}
							>
								{global.user.billingAddress.map((addr, i) => (
									<Option key={i + "-billing"} value={addr._id}>
										{addr.street}
									</Option>
								))}
							</Select>
							<Link
								to={{
									pathname: "/AddAddress",
									state: {
										type: "billingAddress"
									}
								}}
							>
								Add Billing Address
							</Link>
						</Form.Item>
					</Form>
					<Button
						block
						shape="round"
						type="primary"
						size="large"
						onClick={submitPurchase}
						loading={loading}
					>
						SUBMIT ORDER
					</Button>
				</Col>
				{/* <Col span={8}>
					
				</Col> */}
			</Row>
		</>
	);
};
export default CheckoutForm;
