import React from "react";
import { Row, Col } from "antd";
import CatButton from "../components/CatButton";

const TopCats1 = [
	"React",
	"Javascript",
  "HTML",
  "CSS",
  "SASS"
];

const TopCats2 = [
	"Node.js",
	"MySQL",
  "MongoDB",
  "Redux",
  "APIs"
];

const Categories = () => {
	return (
		<>
			<h1>All Categories</h1>
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
		</>
	);
};

export default Categories;
