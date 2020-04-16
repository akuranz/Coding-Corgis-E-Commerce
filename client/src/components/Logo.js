import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
	return (
		<Link to="/">
			<img
				src={require("../images/coding-corgi-logo-192h.png")}
				alt="logo"
				style={{ margin: 25 }}
			/>
		</Link>
	);
};

export default Logo;
