import React from "react";
import { Link } from "react-router-dom";
import { Button, Row, Col } from "antd";
import HomeCarousel from "../components/HomeCarousel";
import CatButton from "../components/CatButton";
import { RightOutlined } from "@ant-design/icons";

const TopCats1 = ["React", "Javascript", "HTML"];

const TopCats2 = ["Node.js", "MySQL", "MongoDB"];

const HomePage = () => {
	return (
		<div>
			<h1>Home</h1>
			<HomeCarousel />
			<div className="container" style={{ marginTop: 25 }}>
				<h4>
					Top Categories
          <Link to="/categories">
					<Button size="small" shape="round" style={{ marginLeft: 10 }}>
						All Categories <RightOutlined />
					</Button>
          </Link>
				</h4>
				<Row>
					<Col span={11}>
						{TopCats1.map((cats, i) => {
							return <CatButton key={i + "cats-1"} title={cats} />;
						})}
					</Col>
					<Col span={2} />
					<Col span={11}>
						{TopCats2.map((cats, i) => {
							return <CatButton key={i + "cats-2"} title={cats} />;
						})}
					</Col>
				</Row>
			</div>
		</div>
	);
};

export default HomePage;
