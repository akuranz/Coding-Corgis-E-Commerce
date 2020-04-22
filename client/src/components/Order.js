import React from "react";
import "antd/dist/antd.css";

import { Card, Col, Button, Rate } from "antd";

const Order = ({ order, language, price, coder }) => {
	// console.log("service components", service);
	// console.log("rate info!!!", service.reviews);
	// console.log("order props", order)
	
	// const revNum = service.reviews[0].review
	return (
		<Col span={8}>
			<Card bordered={false} style={{ marginBottom: 15 }}>
				
				<ul>
					<li>
						<strong>Language:</strong> {language}
					</li>
					<li>
						<strong>Price:</strong> ${price}/hr
					</li>
					<li>
						<strong>Coder:</strong> {coder}
					</li>
					{/* <li>
					{/* <strong>Top Review By { order.reviews[0].reviewer } :</strong> {order.reviews[0].text}
					</li>
					
					
					<Rate defaultValue={revNum} /> */} */}

				</ul>

       
     
				{/* {selected ? (
					<Button
            danger
						onClick={() => {
							handleCart(service);
						}}
						data-id={service._id}
						shape="round"
					>
						Remove
					</Button>
				) : (
					<Button
						onClick={() => {
							handleCart(service);
						}}
						data-id={service._id}
						shape="round"
					>
						Add to Cart
					</Button>
				)} */}
				
			</Card>
		</Col>
	);

};

Order.defaultProps = {
	selected: false
};

export default Order;

// <li className="list-group-item"> Services Ordered: {service.language}</li>
// <li className="list-group-item"> Service Price: {service.price}</li>
// <li className="list-group-item"> Coder: {service.coder}</li>
// <li className="list-group-item"> Billing Address: {order.billingAddress}</li>
//   <li className="list-group-item"> Customer Name: {order.firstName}</li>
//   <li className="list-group-item"> Customer Email: {order.email}</li>
