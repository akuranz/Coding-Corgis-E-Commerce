import React from "react";
import { Link } from "react-router-dom";
import { Button } from "antd";
import { RightOutlined } from "@ant-design/icons";

const loginSignup = () => {
	return (
		<div>
			<h2>Would you like to Login or Signup?</h2>
			<Link to="/Login">
				<Button type="primary" shape="round" size="large">
					<span>
					LOGIN <RightOutlined />
					</span>
				</Button>
			</Link>
			<Link to="/Signup">
				<Button type="primary" style={{ marginLeft: 20 }}  shape="round" size="large">
					<span>
					SIGNUP <RightOutlined />
					</span>
				</Button>
			</Link>
		</div>
	);
};

export default loginSignup;
