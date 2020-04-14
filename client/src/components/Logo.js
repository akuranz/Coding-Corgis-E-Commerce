import React from "react";

const Logo = () => {
	return (
		<a id="headerLogo" href="/">
			<img
				src={require("../images/coding-corgi-logo-192h.png")}
				alt="logo"
				style={{ margin: 25 }}
			/>
		</a>
	);
};

export default Logo;
