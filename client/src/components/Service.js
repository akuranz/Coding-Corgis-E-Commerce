import React from "react";
import "antd/dist/antd.css";
import { Card, Col} from "antd";

const Service = ({ service, handleCart }) => {
  return (
    
        <Col span={8}>
          <Card title="Card title" bordered={false}>
            <ul>
              <li>
                <strong>Language:</strong> {service.language}
              </li>
              <li>
                <strong>Price:</strong> {service.price}
              </li>
              <li>
                <strong>Coder:</strong> {service.coder}
              </li>
            </ul>
            <button
              onClick={() => {
                handleCart(service);
              }}
              data-id={service._id}
            >
              Add to Cart
            </button>
          </Card>
        // </Col>
  )
};

export default Service;
