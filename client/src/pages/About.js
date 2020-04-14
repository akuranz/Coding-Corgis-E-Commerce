import React from "react";
import {
	TeamOutlined,
	SolutionOutlined,
	EnvironmentOutlined,
	ContactsOutlined,
	QuestionCircleOutlined
} from "@ant-design/icons";

const About = () => {
	return (
		<>
			<h1><QuestionCircleOutlined /> About Us</h1>
			<div className="container" style={{ width: 400, textAlign: "center" }}>
				<h3>
					<TeamOutlined /> Who
				</h3>
				<p>
					We are a group of Full-Stack Web Development Bootcamp graduates that
					decided we wanted to offer our services to other grads that may be
					missing out on having a tutor or just need someone else to figure out
					a problem for you.
				</p>
				<h3>
					<SolutionOutlined /> What
				</h3>
				<p>
					We all have different strengths in the coding world, <br />
					and we each offer services in what we feel most proficient in.
				</p>
				<h3>
					<EnvironmentOutlined /> Where
				</h3>
				<p>
					With everything being remote capable these days, <br />
					does it matter where we are?
				</p>
				<h3>
					<ContactsOutlined /> Contact
				</h3>
				<p>
					When you purchase a service you will receive the contact information
					for the individual you purchased that service from, but if you have a
					question about us that can't be answered by Google, you can give us a
					call at 000-000-0000 or shoot us an email at{" "}
					<a
						href="https://www.google.com"
						target="_blank"
						rel="noopener noreferrer"
					>
						inquiries@codingcorgis.com
					</a>
				</p>
			</div>
		</>
	);
};

export default About;
