import React from "react";
import { Link } from "react-router-dom";
import { Button } from "antd";
import { RightOutlined } from "@ant-design/icons";

const loginSignup = () => {
	return (
		<div>
			<h3>Would you like to Login or Signup?</h3>
			<Link to="/Login">
				<Button>
					<span>
						Login <RightOutlined />
					</span>
				</Button>
			</Link>
			<Link to="/Signup">
				<Button style={{ marginLeft: 20 }}>
					<span>
						Signup <RightOutlined />
					</span>
				</Button>
			</Link>
		</div>
	);
};

export default loginSignup;
