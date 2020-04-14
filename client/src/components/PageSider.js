import React from "react";
import { Layout } from "antd";
import SideMenu from "./SideMenu";

const { Sider } = Layout;


const PageSider = () => {
	return (
		<Sider
			// style={{ backgroundColor: "#443850" }}
			breakpoint="lg"
			collapsedWidth="0"
			onBreakpoint={broken => {
				console.log(broken);
			}}
			onCollapse={(collapsed, type) => {
				console.log(collapsed, type);
			}}
		>
			<SideMenu />
		</Sider>
	);
};

export default PageSider;
