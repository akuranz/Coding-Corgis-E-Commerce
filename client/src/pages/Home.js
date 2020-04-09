import React from "react";
import { Row, Col } from "antd";
import HomeCarousel from "../components/HomeCarousel";
import CatButton from "../components/CatButton";

const TopCats1 = [
	"React",
	"Javascript",
	"HTML"
];

const TopCats2 = [
	"Node.js",
	"MySQL",
	"MongoDB"
];

const HomePage = () => {
	return (
		<div>
			<h1>Home</h1>
			<HomeCarousel />
			<div className="container" style={{ marginTop: 25 }}>
					<h4>Top Categories</h4>
				<Row>
					<Col span={11}>
						{TopCats1.map(cats => {
							return <CatButton title={cats} />;
						})}
					</Col>
					<Col span={2} />
					<Col span={11}>
						{TopCats2.map(cats => {
							return <CatButton title={cats} />;
						})}
					</Col>
				</Row>
			</div>
		</div>
	);
};

export default HomePage;
