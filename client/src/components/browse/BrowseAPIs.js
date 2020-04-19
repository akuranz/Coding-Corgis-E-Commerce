import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Row, Button } from "antd";
import { AppstoreOutlined, LeftOutlined } from "@ant-design/icons";
import API from "../../utils/API";
import Service from "../Service";

import { useGlobalState } from "../../utils/GlobalContext";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

toast.configure();

const BrowseAPIs = () => {
	const [state, dispatch] = useGlobalState();
	const [services, setServices] = useState([]);

	useEffect(() => {
		function loadServices() {
			API.getServices()
				.then(res => {
					console.log("res", res);
					setServices(res.data);
				})
				.catch(err => console.log(err));
		}
		loadServices();
	}, []);

	const selectService = service => {
		if (state.user._id) {
			toast("Added to Cart", { type: "success", autoClose: 2000 });
			return dispatch({
				type: "CART_ADD_SERVICE",
				payload: service
			});
		}
		toast("Must be logged in to add services to cart", {
			type: "error",
			autoClose: 2000
		});
	};

	console.log("services", services);

	return (
		<>
			<h1>
				<AppstoreOutlined /> Our Services
			</h1>
			<div className="site-card-wrapper">
				<Row gutter={16}>
					<h3>No Services available for this Language yet!</h3>
					{/* {services.map((service, i) => {
						return (
							<Service
							key={i + "-service"}
							service={service}
							handleCart={selectService}
							/>
							);
						})} */}
				</Row>
				<Link to="/browse">
					<Button size="large" shape="round">
						<LeftOutlined />
						Go to All Services
					</Button>
				</Link>
			</div>
		</>
	);
};
export default BrowseAPIs;
