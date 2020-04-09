import React from "react";
import { Button } from "antd";
import { RightOutlined } from "@ant-design/icons";

const CatButton = props => {
	return (
		<a href={`/browse/categories/${props.title}`}>
		<Button block type="primary" shape="round" size="large" style={{ marginTop: 15 }}>
			{props.title} <RightOutlined />
		</Button>
		</a>
	);
};

export default CatButton;
