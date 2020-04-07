import React from "react";
import { Carousel, Empty } from "antd";

const HomeCarousel = () => {
	return (
		<Carousel autoplay style={{ backgroundColor: "#443850", height: 256 }}>
			<div style={{ color: "#EAF0CE" }}>
				<Empty style={{ padding: 50 }}/>
			</div>
			<div style={{ color: "#EAF0CE" }}>
				<Empty style={{ padding: 50 }} />
			</div>
			<div style={{ color: "#EAF0CE" }}>
				<Empty style={{ padding: 50 }} />
			</div>
			<div style={{ color: "#EAF0CE" }}>
				<Empty style={{ padding: 50 }} />
			</div>
		</Carousel>
	);
};

export default HomeCarousel;
