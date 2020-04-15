import React from "react";
import "antd/dist/antd.css";
import { Card, Col, Button, Rate } from "antd";

const Service = ({ service, selected, handleCart }) => {
  return (
    <Col span={8}>
      <Card bordered={false}>
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
          <li>
            <strong>Review:</strong> {service.review[0].reviewer}
          </li>

          <Rate disabled dafaultValue={service.review} />
        </ul>
        <Button
          onClick={() => {
            handleCart(service);
          }}
          data-id={service._id}
        >
          {selected ? "Remove" : "Add to Cart"}
        </Button>
      </Card>
    </Col>
  );
};

Service.defaultProps = {
  selected: false,
};

export default Service;
