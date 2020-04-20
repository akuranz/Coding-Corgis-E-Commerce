import React from "react";
import { Route } from "react-router-dom";
import { Layout } from "antd";

// pages
import HomePage from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import loginSignup from "../pages/loginSignup";
import Browse from "../pages/Browse";
import Cart from "../pages/Cart.jsx";
import About from "../pages/About";
import Categories from "../pages/Categories";
import Checkout from "../pages/Checkout";
import AddAddress from "../pages/AddAddress";
import OrderHistory from "../pages/OrderHistory";

const { Content } = Layout;

const PageContent = () => {
	return (
		<Content style={{ margin: "24px 16px 0" }}>
			<div
				className="site-layout-background"
				style={{ padding: 24, minHeight: 360 }}
			>
				<Route exact path="/" component={HomePage} />
				<Route exact path="/loginSignup" component={loginSignup} />
				<Route exact path="/Login" component={Login} />
				<Route exact path="/Signup" component={Signup} />
				<Route exact path="/browse" component={Browse} />
				<Route path="/cart" component={Cart} />
				<Route exact path="/about" component={About} />
				<Route exact path="/categories" component={Categories} />
				<Route exact path="/checkout" component={Checkout} />
				<Route exact path="/AddAddress" component={AddAddress} />
				<Route exact path="/OrderHistory" component={OrderHistory} />
			</div>
		</Content>
	);
};

export default PageContent;
