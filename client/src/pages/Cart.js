import React, { useEffect } from "react";
import { useGlobalState } from "../utils/GlobalContext";
import Service from "../components/Service";

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
        <h1>Services You've Selected</h1>
        {state.cart.map((service, i) => {
          return (
            <Service
              key={i + "-service"}
              service={service}
              selected={true}
              handleCart={removeService}
            />
            // <Service
            //   key={i + "-service"}
            //   service={service}
            //   handleCart={handleCart}
            // />
          );
        })}

        <button onClick={orderServices}>Order!</button>
      </div>
    </div>
  );
};

export default Cart;
