import React, { useState, useEffect } from "react";
import { useGlobalState } from "../utils/GlobalContext";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import API from "../utils/API";
import Service from "../components/Service";
import { Button, Row, Col, Select } from "antd";
// import { DownOutlined } from "@ant-design/icons";

// import { loadStripe } from "@stripe/stripe-js";
// import StripeCheckout from "react-stripe-checkout";

import "react-toastify/dist/ReactToastify.css";

toast.configure();

const { Option } = Select;

const CheckoutForm = () => {
  const [global, dispatch] = useGlobalState();
  const [state, setState] = useState({
    ...global.user,
    billingAddress: global.user.billingAddress[0] || { _id: "" },
    // billingAddress: "",
  });
  const [loading, setLoading] = useState(false);
  console.log("GLobal Billing Address", global.user.billingAddress);

  console.log(global);

  const enterLoading = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 8000);
  };

  const removeService = (service) => {
    toast("Removed from Cart", { type: "error", autoClose: 2000 });
    console.log("REMOVE", service);
    dispatch({
      type: "CART_REMOVE_SERVICE_BY_ID",
      payload: service._id,
    });
  };
  
  const handleInput = ({ target }) => {
    setState({
      ...state,
      [target.name]: target.value,
    });
  };
  
  const submitPurchase = async () => {
    enterLoading();
    try {
      const response = await axios.post("/api/checkout", {
        ...state,
        purchased_service_ids: global.serviceIds(),
      });
      console.log("info to db", response);
      toast(`Purchase Complete! A confirmation email has been sent to ${global.user.email}`, { type: "success", autoClose: 8000 });
      setLoading(false);
      // const message = await axios.post("/send", {
        //   ...state,
        //   firstName: global.user.firstName,
        //   lastName: global.user.lastName,
        //   email: global.user.email,
        //   // message: message,
        // });
      // console.log("info to customer", message);
    } catch (error) {
      console.warn(error);
      // if (res.data.msg === "success") {
      //   alert("Message Sent.");
      //   this.resetForm();
      // } else if (res.data.msg === "fail") {
      //   alert("Message failed to send.");
      // }
    }
  };

  function handleChange(value) {
    console.log(`selected ${value}`);
  }

  return (
    <>
      <Row gutter={16}>
        {global.cart.map((svc, i) => {
          return (
            <Service
              key={i + "-service"}
              service={svc}
              selected={true}
              handleCart={removeService}
            />
            // <li key={i + "-service"}>
            // 	{svc.language} {svc.price}
            // </li>
          );
        })}
      </Row>
      <Row gutter={16}>
        <Col span={16} />
        <Col span={8}>
          <h4>Total Amount Due: ${global.cartTotal()}/hr</h4>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={8}>
          <input
            type="text"
            id="firstName"
            placeholder="First Name"
            name="firstName"
            value={state.firstName}
            onChange={handleInput}
          />
          <input
            type="text"
            id="lastName"
            placeholder="Last Name"
            name="lastName"
            value={state.lastName}
            onChange={handleInput}
          />
          <input
            type="text"
            id="email"
            placeholder="email"
            name="email"
            value={state.email}
            onChange={handleInput}
          />
        </Col>
        <Col span={8}>
          <h5> Billing Address </h5>

          <Select
            value={state.billingAddress._id}
            style={{ width: 200 }}
            onChange={handleChange}
          >
            {global.user.billingAddress.map((addr, i) => (
              <Option key={i + "-billing"} value={addr._id}>
                {addr.street}
              </Option>
            ))}
          </Select>
        </Col>

        <Col span={8}>
          {/* remove shipping address? */}
          {/* <h5> Shipping Address </h5>

					<select>
						{global.user.shippingAddress.map((addr, i) => (
							<option key={i + "-shipping"} value={addr._id}>
								{addr.street}
							</option>
						))}
					</select> */}
        </Col>
        <Col span={8}>
          <Button
            block
            shape="round"
            type="primary"
            size="large"
            onClick={submitPurchase}
            loading={loading}
          >
            Submit
          </Button>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={8}>
          <Link
            to={{
              pathname: "/AddAddress",
              state: {
                type: "billingAddress",
              },
            }}
          >
            Add Billing Address
          </Link>
        </Col>
        {/* <Col span={8}>
					<Link
						to={{
							pathname: "/AddAddress",
							state: {
								type: "shippingAddress"
							}
						}}
					>
						Add Shipping Address
					</Link>
				</Col> */}
        {/* <Col span={8} /> */}
      </Row>
      {/* <Row gutter={16}>
        <Col span={8} />
        <Col span={8}>
          {/* <h4>Total Amount Due: ${paymentTotal}/hr</h4> */}
      {/* </Col>
        <Col span={8}>
          <StripeCheckout
            stripeKey="pk_test_4TbuO6qAW2XPuce1Q6ywrGP200NrDZ2233"
            token={handleToken}
            amount={service.price * 100}
            name={service.language}
            billingAddress
            // shippingAddress
          />
        </Col>
      </Row> */}{" "}
    </>
  );

  // const paymentTotal = state.cart.reduce(function(prev, cur) {
  // 	return prev + cur.price;
  // }, 0);

  // return (
  // 	<div>
  // 		<Row gutter={16}>
  // 			{state.cart.map((service, i) => {
  // 				return (
  // 					<Service
  // 						key={i + "-service"}
  // 						service={service}
  // 						selected={true}
  // 						handleCart={removeService}
  // 					/>
  // 				);
  // 			})}
  // 			{/* <h1>{service.language}</h1> */}
  // 			{/* <h3>On Sale · ${service.price}</h3> */}
  // 		</Row>
  //
  // 	</div>
  // );
};

export default CheckoutForm;

// order history first
// maybe try to tackle stripe again?
// add twillio, chatbot or some checkout method
// look through alternative extra technologies
// deploy early, push any extra changes after if needed
