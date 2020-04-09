import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "antd";
import {
	RightOutlined,
	HomeOutlined,
	LoginOutlined,
	AppstoreOutlined,
	ShoppingCartOutlined,
	QuestionCircleOutlined,
	LogoutOutlined
} from "@ant-design/icons";
import axios from "axios";

const SideMenu = props => {
	const handleLogout = () => {
		axios.post("/auth/logout")
			.then(res => {
		  window.location.assign("/");
		});
	};
	return (
		<Menu defaultSelectedKeys={["1"]} mode="inline" theme="dark">
			<Menu.Item>
				<HomeOutlined />
				<span>
					Home <RightOutlined />
				</span>
				<Link to="/" />
			</Menu.Item>
			{!props.isLoggedIn && (
				<Menu.Item>
					<LoginOutlined />
					<span>
						Login/Signup <RightOutlined />
					</span>
					<Link to="/loginSignup" />
				</Menu.Item>
			)}
			{props.isLoggedIn && (
				<Menu.Item onClick={handleLogout}>
					<span>
						<LogoutOutlined /> Logout <RightOutlined />
					</span>
				</Menu.Item>
			)}
			<Menu.Item>
				<AppstoreOutlined />
				<span>
					Browse Services <RightOutlined />
				</span>
				<Link to="/browse" />
			</Menu.Item>
			<Menu.Item>
				<ShoppingCartOutlined />
				<span>
					My Cart <RightOutlined />
				</span>
				<Link to="/cart" />
			</Menu.Item>
			<Menu.Item>
				<QuestionCircleOutlined />
				<span>
					About Us <RightOutlined />
				</span>
				<Link to="/about" />
			</Menu.Item>
		</Menu>
	);
};

export default SideMenu;
