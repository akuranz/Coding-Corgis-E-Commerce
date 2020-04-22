import React, { useState } from "react";
import { useGlobalState } from "../utils/GlobalContext";
import { Link } from "react-router-dom";
import { Button, Form, Input } from "antd";
import { EnvironmentOutlined, LeftOutlined } from "@ant-design/icons";
import axios from "axios";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

toast.configure();

const layout = {
	labelCol: {
		span: 8
	},
	wrapperCol: {
		span: 16
	}
};
const tailLayout = {
	wrapperCol: {
		offset: 8,
		span: 16
	}
};

function AddAddress(props) {
	const { type } = props.location.state;
	// console.log(type);
	const [global, dispatch] = useGlobalState();
	const [state, setState] = useState({
		street: "",
		city: "",
		state: "",
		country: "",
		zip_code: ""
	});

	const handleInput = ({ target }) => {
		setState({
			...state,
			[target.name]: target.value
		});
	};

	const handleSubmit = async () => {
		try {
			const URL = `/api/address/${global.user._id}/${type}`;
			const response = await axios.post(URL, state);
			// console.log(response);
			dispatch({
				type: "LOGIN_USER",
				payload: response.data
			});
			toast("Added address!", { type: "success", autoClose: 2000 });
		} catch (error) {
			toast("Must be logged in to add an Address!", {
				type: "error",
				autoClose: 2000
			});
			console.warn(error);
		}
	};

	const onFinish = values => {
		console.log("Success:", values);
	};

	const onFinishFailed = errorInfo => {
		console.log("Failed:", errorInfo);
	};

	return (
		<>
			<h3>
				<EnvironmentOutlined /> Add Billing Address
			</h3>
			<Form
				{...layout}
				// layout="horizontal"
				name="basic"
				initialValues={{
					remember: true
				}}
				onFinish={onFinish}
				onFinishFailed={onFinishFailed}
			>
				<Form.Item label="Street">
					<Input
						type="text"
						placeholder="street"
						name="street"
						onChange={handleInput}
					/>
				</Form.Item>
				<Form.Item label="City">
					<Input
						type="text"
						placeholder="city"
						name="city"
						onChange={handleInput}
					/>
				</Form.Item>
				<Form.Item label="State">
					<Input
						type="text"
						placeholder="state"
						name="state"
						onChange={handleInput}
					/>
				</Form.Item>
				<Form.Item label="Country">
					<Input
						type="text"
						placeholder="country"
						name="country"
						onChange={handleInput}
					/>
				</Form.Item>
				<Form.Item label="Zip Code">
					<Input
						type="text"
						placeholder="zip code"
						name="zip_code"
						onChange={handleInput}
					/>
				</Form.Item>
				<Form.Item {...tailLayout}>
					<Button
						type="primary"
						shape="round"
						size="large"
						onClick={handleSubmit}
					>
						Save
					</Button>
				</Form.Item>
			</Form>

			<Link to="/checkout">
				<Button block shape="round" size="large">
					<LeftOutlined />
					Return to Checkout
				</Button>
			</Link>
		</>
	);
}

export default AddAddress;
