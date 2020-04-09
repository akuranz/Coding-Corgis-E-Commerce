import React from "react";
import { Row, Col } from "antd";

const FooterContent = () => {
	return (
		<>
			<Row>
				<Col span={6} />
				<Col span={12}>
					<a
						href="https://twitter.com/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<i className="fab fa-twitter fa-3x" style={{ margin: 15 }} />
					</a>
					<a
						href="https://www.facebook.com/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<i className="fab fa-facebook-f fa-3x" style={{ margin: 15 }} />
					</a>
					<a
						href="https://www.google.com"
						target="_blank"
						rel="noopener noreferrer"
					>
						<i className="fab fa-google-plus-g fa-3x" style={{ margin: 15 }} />
					</a>
					<a
						href="https://www.instagram.com"
						target="_blank"
						rel="noopener noreferrer"
					>
						<i className="fab fa-instagram fa-3x" style={{ margin: 15 }} />
					</a>
				</Col>
				<Col span={6} />
			</Row>
			<p>Terms & Conditions | Feedback | Contact Us</p>
			<p>Ant Design ©2018 Created with Ant UED</p>
		</>
	);
};

export default FooterContent;
