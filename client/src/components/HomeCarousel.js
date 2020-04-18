import React from "react";
import { Carousel } from "antd";

const HomeCarousel = () => {
	return (
		<Carousel
			autoplay
			style={{
				// backgroundColor: "#443850",
				height: 260,
				width: 775,
				display: "flex"
			}}
		>
			<div style={{ color: "#EAF0CE" }}>
				<img
					alt="coding"
					src={require("../images/chris-ried-ieic5Tq8YMk-unsplash.jpg")}
					style={{ width: 775 }}
					/>
			</div>
			<div style={{ color: "#EAF0CE" }}>
				<img
					alt="coding"
					src={require("../images/dhaval-parmar-dnPniNPUe4o-unsplash.jpg")}
					style={{ width: 775 }}
					/>
			</div>
			<div style={{ color: "#EAF0CE" }}>
				<img
					alt="coding"
					src={require("../images/ilya-pavlov-OqtafYT5kTw-unsplash.jpg")}
					style={{ width: 775 }}
					/>
			</div>
			<div style={{ color: "#EAF0CE" }}>
				<img
					alt="coding"
					src={require("../images/luca-bravo-XJXWbfSo2f0-unsplash.jpg")}
					style={{ width: 775 }}
				/>
			</div>
		</Carousel>
	);
};

export default HomeCarousel;
