import React, {useState} from "react";
import {
	Form,
	Input,
	Button,
	// Radio,
	Select,
	Cascader,
	DatePicker,
	InputNumber,
	TreeSelect,
	Switch
} from "antd";

const Login = () => {
	// const [componentSize, setComponentSize] = useState('small');

	// const onFormLayoutChange = ({ size }) => {
	//   setComponentSize(size);
  // };
  const [formLayout] = useState("horizontal");

  const buttonItemLayout =
  formLayout === 'horizontal'
    ? {
        wrapperCol: {
          span: 14,
          offset: 4,
        },
      }
    : null;

	return (
		<div>
			<h1>Signup</h1>
			<Form
				labelCol={{
					span: 4
				}}
				wrapperCol={{
					span: 14
				}}
				layout="horizontal"
				initialValues={{
					size: "medium" // {componentSize}
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
				<Form.Item label="Input">
					<Input />
				</Form.Item>
				<Form.Item label="Select">
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
				</Form.Item>
				<Form.Item {...buttonItemLayout}>
					<Button type="primary" htmlType="submit">
						Submit
					</Button>
				</Form.Item>
			</Form>
		</div>
	);
};

export default Login;
