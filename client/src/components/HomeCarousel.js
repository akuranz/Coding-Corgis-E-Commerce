import React from "react";
import { Carousel } from "antd";

const HomeCarousel = () => {
	return (
		<Carousel
			autoplay
			style={{
				backgroundColor: "#443850",
				height: 260,
				width: 775,
				display: "flex"
			}}
		>
			<div style={{ color: "#EAF0CE" }}>
				<img
					src={require("../images/301-kim-Eydo2lQNfgU-unsplash.jpg")}
					style={{ width: 775 }}
				/>
			</div>
			<div style={{ color: "#EAF0CE" }}>
				<img
					src={require("../images/ruby-doan-iTkMgbiZ504-unsplash.jpg")}
					style={{ width: 775 }}
				/>
			</div>
			<div style={{ color: "#EAF0CE" }}>
				<img
					src={require("../images/bundo-kim-W6KdPX84whY-unsplash.jpg")}
					style={{ width: 775 }}
				/>
			</div>
			<div style={{ color: "#EAF0CE" }}>
				<img
					src={require("../images/helen-cheng-ty3FAU-hLUM-unsplash.jpg")}
					style={{ width: 775 }}
				/>
			</div>
		</Carousel>
	);
};

export default HomeCarousel;
