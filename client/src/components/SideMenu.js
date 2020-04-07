import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "antd";
import {
	RightOutlined,
	HomeOutlined,
	LoginOutlined,
	AppstoreOutlined,
	ShoppingCartOutlined,
	QuestionCircleOutlined
} from "@ant-design/icons";

const SideMenu = () => {
  return (
    <Menu defaultSelectedKeys={["1"]} mode="inline" theme="dark">
						<Menu.Item>
							<HomeOutlined />
							<span>
								Home <RightOutlined />
							</span>
							<Link to="/" />
						</Menu.Item>
						<Menu.Item>
							<LoginOutlined />
							<span>
								Login/Signup <RightOutlined />
							</span>
							<Link to="/loginSignup" />
						</Menu.Item>
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
						{/* <Menu.Item> // logout if a user is logged in
							<QuestionCircleOutlined />
							<span>
								About Us <RightOutlined />
							</span>
							<Link to="/about" />
						</Menu.Item> */}
					</Menu>
  )
}

export default SideMenu;