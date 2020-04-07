import React from "react";
import { Link } from "react-router-dom";
import { Button } from "antd";
import { RightOutlined } from "@ant-design/icons";

const loginSignup = () => {
	return (
		<div>
			<h1>loginSignup</h1>
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
			{/* <Route exact path="/Login" component={Login} />
			<Route exact path="/Signup" component={Signup} /> */}
		</div>
	);
};

export default loginSignup;
