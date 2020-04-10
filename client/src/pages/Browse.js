import React, { useState, useEffect } from "react";
import API from "../utils/API";
import Service from "../components/Service";
import { Row } from "antd";

function Browse({ handleCart }) {
  const [services, setServices] = useState([]);

  useEffect(() => {
    function loadServices() {
      API.getServices()
        .then((res) => {
          console.log(res);
          setServices(res.data);
        })
        .catch((err) => console.log(err));
    }
    loadServices();
  }, []);

  return (
    <>
      <div className="row">
        <div className="col" size="md-6">
          <h1>What Services do we offer?</h1>
          <div className="site-card-wrapper">
              <Row gutter={16}> 
          {services.map((service, i) => {
            return (
              <Service
                key={i + "-service"}
                service={service}
                handleCart={handleCart}
              />
              );
            })}
            </Row> 
           </div>
          
        </div>
      </div>
    </>
  );
}
export default Browse;
