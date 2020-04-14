import React from "react";
import { Layout } from "antd";

// components
import FooterContent from "./FooterContent";
import PageSider from "./PageSider";
import PageHeader from "./PageHeader";
import PageContent from "./PageContent";
// other
const { Footer } = Layout;

const AllLayout = () => {
	return (
		<Layout>
			<PageSider />
			<Layout>
				<PageHeader />
				<PageContent />
				<Footer style={{ textAlign: "center", backgroundColor: "#443850" }}>
					<FooterContent />
				</Footer>
			</Layout>
		</Layout>
	);
};

export default AllLayout;
