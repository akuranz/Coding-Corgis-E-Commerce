import React from "react";
import { Layout } from "antd";
import Logo from "./Logo";

const { Header } = Layout;

const PageHeader = () => {
	return (
		<Header
			className="site-layout-sub-header-background"
			style={{
				padding: 0,
				backgroundColor: "#EAF0CE",
				height: 250,
				justifyContent: "center",
				display: "flex"
			}}
		>
			<Logo />
		</Header>
	);
};

export default PageHeader;
