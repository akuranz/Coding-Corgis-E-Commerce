import React, { useState, useEffect } from "react";
import API from "../utils/API";
import Service from "../components/Service";
import { useGlobalState } from "../utils/GlobalContext";

const OrderHistory = () => {
  const [global, dispatch] = useGlobalState();
  const [orders, setOrders] = useState([]);
  // console.log("This is the state inside orderHistory.js", global);
  // console.log("state inside order history", orders);

  useEffect(() => {
    loadOrders();
  }, []);

  function loadOrders() {
    // console.log("OH route check C1");
    API.getOrders()
      .then((res) => {
        // console.log(res.data);
        setOrders(res.data);
      })
      .catch((err) => console.log(err));
  }

  return (
    <>
      <h2>Order History</h2>
      {orders.map((order) => (
        <div className="list-group-item">
          <div className="list-group-item">
            <p>Order Date: {order.date}</p>
            <div className="list-group">
              {order.service.map((s, i) => (
                <div className="list-group-item">
                  <Service key={i + "-s"} service={s} checkout={true} />
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </>
  );

};

export default OrderHistory;
