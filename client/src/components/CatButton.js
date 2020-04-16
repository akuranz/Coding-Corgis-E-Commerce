import React from "react";
import { Link } from "react-router-dom";
import { Button } from "antd";
import { RightOutlined } from "@ant-design/icons";

const CatButton = props => {
	return (
		<Link to={`/browse/${props.title}`}>
		<Button block type="primary" shape="round" size="large" style={{ marginTop: 15 }}>
			{props.title} <RightOutlined />
		</Button>
		</Link>
	);
};

export default CatButton;
