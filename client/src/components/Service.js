import React from "react";
import "antd/dist/antd.css";

import { Card, Col, Button, Rate } from "antd";

const Service = ({ service, checkout, selected, handleCart }) => {
  console.log("service components", service);
  console.log("rate info!!!", service.reviews);

  const revNum = service.reviews[0].review;
  return (
    <Col span={8}>
      <Card bordered={false} style={{ marginBottom: 15 }}>
        <ul>
          <li>
            <strong>Language:</strong> {service.language}
          </li>
          <li>
            <strong>Price:</strong> ${service.price}/hr
          </li>
          <li>
            <strong>Coder:</strong> {service.coder}
          </li>
          <li>
            <strong>Top Review By {service.reviews[0].reviewer} :</strong>{" "}
            {service.reviews[0].text}
          </li>

          <Rate defaultValue={revNum} />
        </ul>

        {!checkout &&
          (selected ? (
            <Button
              danger
              onClick={() => {
                handleCart(service);
              }}
              data-id={service._id}
              shape="round"
            >
              Remove
            </Button>
          ) : (
            <Button
              onClick={() => {
                handleCart(service);
              }}
              data-id={service._id}
              shape="round"
            >
              Add to Cart
            </Button>
          ))}
      </Card>
    </Col>
  );
};

Service.defaultProps = {
  checkout: false,
  selected: false,
  handleCart: () => {},
};

export default Service;
