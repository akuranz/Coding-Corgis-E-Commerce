import React from "react";
import "antd/dist/antd.css";
import { Card, Col, Button, Rate } from "antd";

const Service = ({ service, selected, handleCart }) => {
	console.log("service components", service);
	return (
		<Col span={8}>
			<Card bordered={false} style={{ marginBottom: 15 }}>
				<ul>
					<li>
						<strong>Language:</strong> {service.language}
					</li>
					<li>
						<strong>Price:</strong> ${service.price}/hr
					</li>
					<li>
						<strong>Coder:</strong> {service.coder}
					</li>
					<li>
						<strong>Review:</strong> {service.review[0].review}
					</li>

					<Rate />
				</ul>
				{selected ? (
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
				)}
			</Card>
		</Col>
	);
};

Service.defaultProps = {
	selected: false
};

export default Service;
