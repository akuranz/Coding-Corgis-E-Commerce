import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// components
import Signup from "./components/sign-up";
import LoginForm from "./components/login-form";
import Navbar from "./components/navbar";
import Home from "./components/home";

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
    <BrowserRouter>
      <Switch>
        <div className="App">
          <Navbar updateUser={updateUser} loggedIn={state.loggedIn} />
          {/* greet user if logged in: */}
          {state.loggedIn && (
            <p>Welcome to the corgi party, {state.username}!</p>
          )}
          {/* Routes to different components */}
          <Route exact path="/" component={Home} />
          <Route
            path="/login"
            render={() => <LoginForm updateUser={updateUser} />}
          />
          <Route path="/signup" render={() => <Signup />} />
        </div>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
