import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";

const LoginForm = (props) => {
  const [state, setState] = useState({
    username: "",
    password: "",
    redirectTo: null,
  });

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("handleSubmit");

    axios
      .post("/auth/login", {
        username: state.username,
        password: state.password,
      })
      .then((response) => {
        console.log("login response: ");
        console.log(response);
        if (response.status === 200) {
          // update App.js state
          props.updateUser({
            loggedIn: true,
            username: response.data.username,
          });
          // update the state to redirect to home
          setState({
            ...state,
            redirectTo: "/",
          });
        }
      })
      .catch((error) => {
        console.log("login error: ");
        console.log(error);
      });
  };

  if (state.redirectTo) {
    return <Redirect to={{ pathname: state.redirectTo }} />;
  } else {
    return (
      <div>
        <h4>Login</h4>
        <form className="form-horizontal">
          <div className="form-group">
            <div className="col-1 col-ml-auto">
              <label className="form-label" htmlFor="username">
                Username
              </label>
            </div>
            <div className="col-3 col-mr-auto">
              <input
                className="form-input"
                type="text"
                id="username"
                name="username"
                placeholder="Username"
                value={state.username}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="form-group">
            <div className="col-1 col-ml-auto">
              <label className="form-label" htmlFor="password">
                Password:{" "}
              </label>
            </div>
            <div className="col-3 col-mr-auto">
              <input
                className="form-input"
                placeholder="password"
                type="password"
                name="password"
                value={state.password}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="form-group ">
            <div className="col-7"></div>
            <button
              className="btn btn-primary col-1 col-mr-auto"
              onClick={handleSubmit}
              type="submit"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    );
  }
};

export default LoginForm;
