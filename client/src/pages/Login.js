import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { Form, Input, Button, Checkbox } from "antd";
import { useGlobalState, GlobalState } from "../utils/GlobalContext";
import axios from "axios";

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const Login = (props) => {
  const [global, dispatch] = useGlobalState();
  const [state, setState] = useState({
    username: "",
    password: "",
    // redirectTo: null
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
        console.log("login response:", response);
        dispatch({
          type: "LOGIN_USER",
          payload: response.data,
        });
        window.location.assign("/");
        // console.log(response);
        // if (response.status === 200) {
        //   // update App.js state
        //   props.updateUser({
        //     loggedIn: true,
        //     username: response.data.username,
        //   });
        //   // update the state to redirect to home
        //   setState({
        //     ...state,
        //     // redirectTo: "/"
        //   });
        // }
      })
      .catch((error) => {
        console.log("login error: ");
        console.log(error);
      });
  };

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  // if (state.redirectTo) {
  // 	return <Redirect to={{ pathname: state.redirectTo }} />;
  // } else {
  return (
    <div>

      {global.user._id && <Redirect to="/" />}

      {/* {Object.keys(global.user).length && <Redirect to="/" />} */}

      <h1>Login</h1>
      <Form
        {...layout}
        // layout="horizontal"
        name="basic"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Username"
          name="username"
          id="username"
          placeholder="Username"
          value={state.username}
          onChange={handleChange}
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input name="username" />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          placeholder="password"
          type="password"
          value={state.password}
          onChange={handleChange}
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password name="password" />
        </Form.Item>

        <Form.Item {...tailLayout} name="remember" valuePropName="checked">
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit" onClick={handleSubmit}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
  // }
};

export default Login;
