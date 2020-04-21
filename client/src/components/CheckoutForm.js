import React, { useState, useEffect } from "react";
import { useGlobalState } from "../utils/GlobalContext";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import API from "../utils/API";
import Service from "../components/Service";
import { Button, Row, Col, Select, Form, Input } from "antd";


import "react-toastify/dist/ReactToastify.css";

toast.configure();

const { Option } = Select;


const CheckoutForm = () => {
  const [global, dispatch] = useGlobalState();
  const [state, setState] = useState({
    ...global.user,
    billingAddress: global.user.billingAddress[0] || { _id: "" },
    
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
      
    }
  };

  function handleChange(value) {
    console.log(`selected ${value}`);
  }

  return (
    <>
      <Row gutter={16}>
  
    
        <Col span={6}>
          <h4>Total Amount Due: ${global.cartTotal()}/hr</h4>
        
        </Col>
   
        <Col span={6}>
        <Form>
          <Form.Item rules={[{ required: true }]}>
          <Input
            type="text"
            id="firstName"
            placeholder="First Name"
            name="firstName"
            value={state.firstName}
            onChange={handleInput}
          />
          </Form.Item>
          <Form.Item rules={[{ required: true }]}>
          <Input
            type="text"
            id="lastName"
            placeholder="Last Name"
            name="lastName"
            value={state.lastName}
            onChange={handleInput}
          />
          </Form.Item>
          <Form.Item rules={[{ required: true }]}>
          <Input
            type="text"
            id="email"
            placeholder="email"
            name="email"
            value={state.email}
            onChange={handleInput}
          />
          </Form.Item>
         
          </Form>
        </Col>
        <Col span={6}>
        
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
        <Col span={6}>
      
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
        <Row>
        {global.cart.map((svc, i) => {
          return (
            <Service
              key={i + "-service"}
              service={svc}
              selected={true}
              handleCart={removeService}
            />
           
          );
        })}
    </Row>
    </>
  );


          }
export default CheckoutForm;

