import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import axios from "axios";
import { Layout } from "antd";
import SideMenu from "./components/SideMenu";
import HomePage from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import loginSignup from "./pages/loginSignup";
import Browse from "./pages/Browse";
import Cart from "./pages/Cart.jsx";
import About from "./pages/About";
import Categories from "./pages/Categories";
import Checkout from "./pages/Checkout";
import FooterContent from "./components/FooterContent";
import "./App.css";
import { GlobalStateProvider } from "./utils/GlobalContext";
import User from "./pages/User";
import AddAddress from "./pages/AddAddress";

const { Header, Content, Footer, Sider } = Layout;

function App() {
  // const [user, setUser] = useState({
  //   loggedIn: false,
  //   username: null,
  // });
  // const [cart, setCart] = useState([{}]);

  // useEffect(() => {
  //   axios.get("/auth").then((response) => {
  //     console.log("Get user response: ");
  //     console.log(response.data);
  //     if (response.data.user) {
  //       console.log("Get User: There is a user saved in the server session: ");
  //       setState((state) => ({
  //         ...state,
  //         loggedIn: true,
  //         user: response.data.user,
  //         username: response.data.user.username,
  //       }));
  //     } else {
  //       console.log("Get user: no user");
  //       setState((state) => ({
  //         ...state,
  //         loggedIn: false,
  //         username: null,
  //       }));
  //     }
  //   });
  // }, []);

  // const handleCart = (service) => {
  //   console.log("we are in handle cart");
  //   console.log(service._id);
  //   setCart({
  //     ...cart,
  //   });
  // };

  // const updateUser = () => {
  //   setState({
  //     ...state,
  //   });
  // };

  return (
    <Router>
      <GlobalStateProvider>
        <User />
        <Layout>
          <Sider
            style={{ backgroundColor: "#443850" }}
            breakpoint="lg"
            collapsedWidth="0"
            onBreakpoint={(broken) => {
              console.log(broken);
            }}
            onCollapse={(collapsed, type) => {
              console.log(collapsed, type);
            }}
          >
            <SideMenu />
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
                <Route exact path="/Login" component={Login} />
                <Route exact path="/Signup" component={Signup} />
                {/* <Route
                  exact
                  path="/browse"
                  render={() => <Browse handleCart={handleCart} />}
                /> */}
                <Route exact path="/browse" component={Browse} />

                <Route path="/cart" component={Cart} />
                <Route exact path="/about" component={About} />
                <Route exact path="/categories" component={Categories} />
                <Route exact path="/checkout" component={Checkout} />
                <Route exact path="/AddAddress" component={AddAddress} />
              </div>
            </Content>
            <Footer style={{ textAlign: "center", backgroundColor: "#443850" }}>
              <FooterContent />
            </Footer>
          </Layout>
        </Layout>
      </GlobalStateProvider>
    </Router>
  );
}

export default App;
