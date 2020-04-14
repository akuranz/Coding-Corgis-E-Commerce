import React, { useEffect } from "react";
import { useGlobalState } from "../utils/GlobalContext";
import Service from "../components/Service";
import { Button, Row, Col } from "antd";

const Cart = () => {
  const [state, dispatch] = useGlobalState();
  console.log("This is the state inside cart.js", state);

  // const cartTotal = 

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

  

    // get sum of msgCount prop across all objects in array
    const priceTotal = state.cart.reduce(function(prev, cur) {
      return prev + cur.price;
    }, 0);
    console.log('Total Price:', priceTotal); // Total Messages: 461
    

  
 
  // const priceTwo
  return (
    <div className="row">
      <div className="col" size="md-6">
        <Row>
          <Col span={8}>
        <h1>Selected Services</h1>
          </Col>
          <Col span={8}>
          <h2>Your Total Amount Due: {priceTotal}</h2>
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
