import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
// components
// import Signup from "./components/sign-up";
// import LoginForm from "./components/login-form";
// import Navbar from "./components/navbar";
// import Home from "./components/home";
import { Layout, Menu } from "antd";
import {
	RightOutlined,
	HomeOutlined,
	LoginOutlined,
	AppstoreOutlined,
	ShoppingCartOutlined,
	QuestionCircleOutlined
} from "@ant-design/icons";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import loginSignup from "./pages/loginSignup";
import Browse from "./pages/Browse";
import Cart from "./pages/Cart";
import About from "./pages/About";
import "./App.css";

const { Header, Content, Footer, Sider } = Layout;

function App() {
  const [state, setState] = useState({
    loggedIn: false,
    username: null,
  });

  useEffect(() => {
    axios.get("/auth").then((response) => {
      console.log("Get user response: ");
      console.log(response.data);
      if (response.data.user) {
        console.log("Get User: There is a user saved in the server session: ");
        setState((state) => ({
          ...state,
          loggedIn: true,
          username: response.data.user.username,
        }));
      } else {
        console.log("Get user: no user");
        setState((state) => ({
          ...state,
          loggedIn: false,
          username: null,
        }));
      }
    });
  }, []);

  const updateUser = () => {
    setState({
      ...state,
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
					</Menu>
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
              <Route exact path="/" component={Home} />
              <Route exact path="/loginSignup" component={loginSignup} />
              <Route exact path="/Login" component={Login} />
              <Route exact path="/Signup" component={Signup} />
              <Route exact path="/browse" component={Browse} />
              <Route exact path="/cart" component={Cart} />
              <Route exact path="/about" component={About} />
						</div>
					</Content>
					<Footer style={{ textAlign: "center" }}>
						Ant Design ©2018 Created by Ant UED
					</Footer>
				</Layout>
			</Layout>
		</Router>
    // <BrowserRouter>
    //   <Switch>
    //     <div className="App">
    //       <Navbar updateUser={updateUser} loggedIn={state.loggedIn} />
    //       {/* greet user if logged in: */}
    //       {state.loggedIn && (
    //         <p>Welcome to the corgi party, {state.username}!</p>
    //       )}
    //       {/* Routes to different components */}
    //       <Route exact path="/" component={Home} />
    //       <Route
    //         path="/login"
    //         render={() => <LoginForm updateUser={updateUser} />}
    //       />
    //       <Route path="/signup" render={() => <Signup />} />
    //     </div>
    //   </Switch>
    // </BrowserRouter>
  );
}

export default App;
