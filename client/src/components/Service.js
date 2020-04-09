import React from "react";

const Service = ({ service }) => {
  return (
    <div>
      <h1>
        {service.language}: ${service.price}
      </h1>
    </div>
  );
};

export default Service;
