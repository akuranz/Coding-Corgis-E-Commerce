import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from "axios";
import { Layout } from "antd";
import SideMenu from "./components/SideMenu";
import HomePage from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import loginSignup from "./pages/loginSignup";
import Browse from "./pages/Browse";
import Cart from "./pages/Cart";
import About from "./pages/About";
import FooterContent from "./components/FooterContent";
import "./App.css";

const { Header, Content, Footer, Sider } = Layout;

function App() {
	const [state, setState] = useState({
		loggedIn: false,
		username: null
	});

	useEffect(() => {
		axios.get("/auth").then(response => {
			console.log("Get user response: ");
			console.log(response.data);
			if (response.data.user) {
				console.log("Get User: There is a user saved in the server session: ");
				setState(state => ({
					...state,
					loggedIn: true,
					username: response.data.user.username
				}));
			} else {
				console.log("Get user: no user");
				setState(state => ({
					...state,
					loggedIn: false,
					username: null
				}));
			}
		});
	}, []);

	const updateUser = () => {
		setState({
			...state
		});
	};

	return (
		<Router>
			<Layout>
				<Sider
					style={{ backgroundColor: "#443850" }}
					breakpoint="lg"
					collapsedWidth="0"
					onBreakpoint={broken => {
						console.log(broken);
					}}
					onCollapse={(collapsed, type) => {
						console.log(collapsed, type);
					}}
				>
					<SideMenu isLoggedIn={state.loggedIn} />
				</Sider>
				<Layout>
					<Header
						className="site-layout-sub-header-background"
						style={{ padding: 0, backgroundColor: "#EAF0CE" }}
					>
						{/* <a id="headerLogo" href="/">
							<img src="../public/coding-corgi-logo-192h.png" alt="logo" />
						</a> */}
					</Header>
					<Content style={{ margin: "24px 16px 0" }}>
						<div
							className="site-layout-background"
							style={{ padding: 24, minHeight: 360 }}
						>
							<Route exact path="/" component={HomePage} />
							<Route exact path="/loginSignup" component={loginSignup} />
							<Route
								exact
								path="/Login"
								render={() => <Login updateUser={updateUser} />}
							/>
							<Route exact path="/Signup" component={Signup} />
							<Route exact path="/browse" component={Browse} />
							<Route exact path="/cart" component={Cart} />
							<Route exact path="/about" component={About} />
						</div>
					</Content>
					<Footer style={{ textAlign: "center", backgroundColor: "#443850" }}>
						<FooterContent />
					</Footer>
				</Layout>
			</Layout>
		</Router>
	);

}

export default App;
