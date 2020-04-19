import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import {
  Form,
  Input,
  Button,
  // Radio,
} from "antd";
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

const Signup = () => {
  // const [componentSize, setComponentSize] = useState('small');

  // const onFormLayoutChange = ({ size }) => {
  //   setComponentSize(size);
  // };
  // const [formLayout] = useState("horizontal");

  const [state, setState] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    redirectTo: null,
  });

  const handleChange = (event) => {
    console.log("event.target.name", event.target.name);
    console.log("event.target.value", event.target.value);
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    console.log("sign-up handleSubmit, username: ");
    console.log(state.username);
    event.preventDefault();

    //request to server to add a new username/password
    axios
      .post("/auth", {
        ...state,
        username: state.username,
        password: state.password,
      })
      .then((response) => {
        console.log(response);
        if (!response.data.errmsg) {
          console.log("successful signup");
          setState({
            ...state,
            redirectTo: "/Login",
          });
        } else {
          console.log("username already taken");
        }
      })
      .catch((error) => {
        console.log("signup error: ");
        console.log(error);
      });
  };

  if (state.redirectTo) {
    return <Redirect to={{ pathname: state.redirectTo }} />;
  } else {
    return (
      <div>
        <h1>Signup</h1>
        <Form
          labelCol={{
            span: 4,
          }}
          wrapperCol={{
            span: 14,
          }}
          {...layout}
          initialValues={{
            size: "medium", // {componentSize}
          }}
          // onValuesChange={onFormLayoutChange}
          // size={componentSize}
        >
          {/* <Form.Item label="Form Size" name="size">
          <Radio.Group>
            <Radio.Button value="small">Small</Radio.Button>
            <Radio.Button value="middle">Middle</Radio.Button>
            <Radio.Button value="large">Large</Radio.Button>
          </Radio.Group>
        </Form.Item> */}
          <Form.Item
            label="Username"
            name="username"
            id="username"
            type="text"
            placeholder="Username"
            value={state.username}
            onChange={handleChange}
            rules={[
              {
                required: true,
                message: "Please input a username!",
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

          {/* <Form.Item
					label="confirmPassword"
					name="confirmPassword"
					placeholder="confirmPassword"
					type="confirmPassword"
					value={state.confirmPassword}
					onChange={handleChange}
					rules={[
						{
							required: true,
							message: "Please input your password again!"
						}
					]}
				>
					<Input.Password name="confirmPassword" />
				</Form.Item> */}

          {/* <Form.Item label="Select">
					<Select>
						<Select.Option value="demo">Demo</Select.Option>
					</Select>
				</Form.Item>
				<Form.Item label="TreeSelect">
					<TreeSelect
						treeData={[
							{
								title: "Light",
								value: "light",
								children: [
									{
										title: "Bamboo",
										value: "bamboo"
									}
								]
							}
						]}
					/>
				</Form.Item>
				<Form.Item label="Cascader">
					<Cascader
						options={[
							{
								value: "zhejiang",
								label: "Zhejiang",
								children: [
									{
										value: "hangzhou",
										label: "Hangzhou"
									}
								]
							}
						]}
					/>
				</Form.Item>
				<Form.Item label="DatePicker">
					<DatePicker />
				</Form.Item>
				<Form.Item label="InputNumber">
					<InputNumber />
				</Form.Item>
				<Form.Item label="Switch">
					<Switch />
				</Form.Item> */}
          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit" onClick={handleSubmit}>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
};

export default Signup;
