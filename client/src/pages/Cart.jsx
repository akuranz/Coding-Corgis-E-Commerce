import React, { useEffect } from "react";
import { useGlobalState } from "../utils/GlobalContext";
import Service from "../components/Service";
import { Button, Row, Col } from "antd";

const Cart = () => {
  const [state, dispatch] = useGlobalState();
  console.log(state);

  const removeService = (service) => {
    console.log("REMOVE", service);
    dispatch({
      type: "CART_REMOVE_SERVICE_BY_ID",
      payload: service._id,
    });
  };

  const orderServices = () => {
    const serviceIDs = state.cart.map((s) => s._id);
    console.log(serviceIDs);
  };

  return (
    <div className="row">
      <div className="col" size="md-6">
        <Row>
          <Col span={8}>
        <h1>Selected Services</h1>
          </Col>
          <Col span={8}>
          <h2>Your Total Amount Due: $00.00</h2>
          </Col>
          <Col span={8}>
        <Button onClick={orderServices}>Continue To Checkout</Button>
          </Col>

        </Row>

        <Row gutter={16}> 
        {state.cart.map((service, i) => {
          return (
            <Service
              key={i + "-service"}
              service={service}
              selected={true}
              handleCart={removeService}
            />
           
          );
        })}
        </Row>
      </div>
    </div>
  );
};

export default Cart;
