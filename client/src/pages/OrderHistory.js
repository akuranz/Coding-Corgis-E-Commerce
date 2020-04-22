import React, { useState, useEffect } from "react";
import API from "../utils/API";
import Service from "../components/Service";
import { Link } from "react-router-dom";
import { useGlobalState } from "../utils/GlobalContext";

import { RightOutlined } from "@ant-design/icons";
import { Button, Row, Col, Select, Form, Input, Card } from "antd";

const OrderHistory = () => {

	const [global, dispatch] = useGlobalState();
	const [orders, setOrders] = useState([]);
	console.log("This is the state inside orderHistory.js", global);
	console.log("state inside order history", orders)


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
	  

	return (
		<>
			<h2>Order History</h2>
	

		{/* {orders.map(order => (
        <Row span={6} className="list-group-item">
		  {order.servicedetails.map(service => (
			  <Card>
				  <li className="list-group-item"> Services Ordered: {service.language}</li>
				  <li className="list-group-item"> Service Price: {service.price}</li>
				  <li className="list-group-item"> Coder: {service.coder}</li>
				  <li className="list-group-item"> Billing Address: {order.billingAddress}</li>
					<li className="list-group-item"> Customer Name: {order.firstName}</li>
					<li className="list-group-item"> Customer Email: {order.email}</li>
			  </Card>
		  )
			)}
        </Row>
      	))} */}

		{orders.map(order => (
        <li className="list-group-item">
		  {order.orderdetails.map(orders => (
			  <li className="list-group-item"> 
			  <p>Customer Name: {order.firstName}</p>
			  <p>Customer Email: {order.email}</p>
			  <p>Confirmation Number: {orders._id}</p>
			  <p>Order Date: {orders.date}</p>
			  <p>Invoice: </p>
			  {order.servicedetails.map(service => (
				  <li className="list-group-item"> 
				  <p>Service Ordered: {service.language}</p>
				  <p>Service Price: {service.price}</p>
				  <p>Coder: {service.coder}</p>
				</li>
				  
			  ))}
			</li>
		  ))}

        </li>
      	))}
		</>
	);

};

export default OrderHistory;
