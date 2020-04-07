import React, { Component } from "react";
import { Button } from 'antd';
import '../App.css';
class Home extends Component {
  render() {
    const imageStyle = {
      width: 400,
    };
    return (
      <div>
        <p>It's good to be home</p>
        <img
          style={imageStyle}
          alt={"shire"}
          src="https://i.ytimg.com/vi/N1icEHtgb3g/maxresdefault.jpg"
        />
        <Button type="primary">Button</Button>
      </div>
    );
  }
}

export default Home;
