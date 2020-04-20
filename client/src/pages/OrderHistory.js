import React, { useState, useEffect } from "react";
import API from "../utils/API";
import Service from "../components/Service";
import { Link } from "react-router-dom";
import { useGlobalState } from "../utils/GlobalContext";
import { Button } from "antd";
import { RightOutlined } from "@ant-design/icons";

const OrderHistory = () => {
	const [global, dispatch] = useGlobalState();
	const [orders, setOrders] = useState([]);
	console.log("This is the state inside orderHistory.js", global);

	useEffect(() => {
		loadOrders();
	  }, []);

	  function loadOrders() {
		console.log("OH route check C1");
		API.getOrders()
		  .then(res => {
			setOrders(res.data);
		  })
		  .catch(err => console.log(err));
		  
	  };

	// useEffect(() => {
	// 	function loadOrders() {
	// 		API.getOrders()
	// 			.then(res => {
	// 				console.log("res", res);
	// 				setOrders(res.data);
	// 				// for (let i = 0; i < services.length; i++) {
	// 				// 	servicesArray.push(services[i].language);
	// 				// }
	// 			})
	// 			.catch(err => console.log(err));
	// 	}
	// 	loadOrders();
	// }, []);



	return (
		<div>
			<h2>Order History</h2>
			<ul>


			{/* {orders.map((service, i) => {
								return (
									<Service
										key={i + "-service"}
										service={service}
									/>
								);
							})} */}


		{orders.map(order => (
        <li className="list-group-item">
		  {order.services.map(service => (
			  <li className="list-group-item"> {service}</li>
		  )
			)}
        </li>
      ))}



			</ul>
		</div>
	);
};

export default OrderHistory;
