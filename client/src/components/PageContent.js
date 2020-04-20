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

// browse components
import BrowseReact from "./browse/BrowseReact";
import BrowseJavascript from "./browse/BrowseJavascript";
import BrowseHTML from "./browse/BrowseHTML";
import BrowseNodejs from "./browse/BrowseNodejs";
import BrowseMySQL from "./browse/BrowseMySQL";
import BrowseMongoDB from "./browse/BrowseMongoDB";
import BrowseCSS from "./browse/BrowseCSS";
import BrowseSASS from "./browse/BrowseSASS";
import BrowseRedux from "./browse/BrowseRedux";
import BrowseAPIs from "./browse/BrowseAPIs";

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
				<Route path="/cart" component={Cart} />
				<Route exact path="/about" component={About} />
				<Route exact path="/categories" component={Categories} />
				<Route exact path="/checkout" component={Checkout} />
				<Route exact path="/AddAddress" component={AddAddress} />

				<Route exact path="/browse" component={Browse} />
				<Route exact path="/browse/React" component={BrowseReact} />
				<Route exact path="/browse/Javascript" component={BrowseJavascript} />
				<Route exact path="/browse/HTML" component={BrowseHTML} />
				<Route exact path="/browse/Node.js" component={BrowseNodejs} />
				<Route exact path="/browse/MySQL" component={BrowseMySQL} />
				<Route exact path="/browse/MongoDB" component={BrowseMongoDB} />
				<Route exact path="/browse/CSS" component={BrowseCSS} />
				<Route exact path="/browse/SASS" component={BrowseSASS} />
				<Route exact path="/browse/Redux" component={BrowseRedux} />
				<Route exact path="/browse/APIs" component={BrowseAPIs} />

				<Route exact path="/OrderHistory" component={OrderHistory} />

			</div>
		</Content>
	);
};

export default PageContent;
