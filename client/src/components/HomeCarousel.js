import React from "react";
import { Carousel } from "antd";
import "./carouselStyle.css";

const HomeCarousel = () => {
	return (
		<div className="container">
			<Carousel
				autoplay
				style={{
					height: 260,
					maxWidth: "100%",
					display: "block"
				}}
			>
				<div style={{ color: "#EAF0CE" }}>
					<img
						alt="coding"
						src={require("../images/chris-ried-ieic5Tq8YMk-unsplash.jpg")}
						style={{ height: "100%", width: "100%" }}
					/>
				</div>
				<div style={{ color: "#EAF0CE" }}>
					<img
						alt="coding"
						src={require("../images/dhaval-parmar-dnPniNPUe4o-unsplash.jpg")}
						style={{ height: "100%", width: "100%" }}
					/>
				</div>
				<div style={{ color: "#EAF0CE" }}>
					<img
						alt="coding"
						src={require("../images/ilya-pavlov-OqtafYT5kTw-unsplash.jpg")}
						style={{ height: "100%", width: "100%" }}
					/>
				</div>
				<div style={{ color: "#EAF0CE" }}>
					<img
						alt="coding"
						src={require("../images/luca-bravo-XJXWbfSo2f0-unsplash.jpg")}
						style={{ height: "100%", width: "100%" }}
					/>
				</div>
			</Carousel>
		</div>
	);
};

export default HomeCarousel;
