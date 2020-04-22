import React, { useState, useEffect } from "react";
import { Row } from "antd";
import { AppstoreOutlined } from "@ant-design/icons";
import API from "../utils/API";
import Service from "../components/Service";
// import { SearchOutlined } from "@ant-design/icons";

import { useGlobalState } from "../utils/GlobalContext";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

toast.configure();

// let checkFiltered = false;

const Browse = () => {
	const [state, dispatch] = useGlobalState();
	const [services, setServices] = useState([]);
	// const [filtered, setFiltered] = useState([]);
	// const [search, setSearch] = useState("");

	// const globalSearch = () => {

	// 	let filteredServices = services.filter(service => {
	// 		return service.language
	// 			.toLowerCase()
	// 			.includes(search.toLocaleLowerCase());
	// 	});

	// 	setFiltered(filteredServices);
	// };

	// const handleChange = event => {
	// 	setSearch(event.target.value);
	// 	globalSearch();
	// 	checkFiltered = true;
	// };
	// console.log("state", state);

	useEffect(() => {
		function loadServices() {
			API.getServices()
				.then(res => {
					console.log("res", res);
					setServices(res.data);
					// for (let i = 0; i < services.length; i++) {
					// 	servicesArray.push(services[i].language);
					// }
				})
				.catch(err => console.log(err));
		}
		loadServices();
	}, []);

	const selectService = service => {
		if (state.user._id) {
			toast("Added to Cart", { type: "success", autoClose: 2000 });
			return dispatch({
				type: "CART_ADD_SERVICE",
				payload: service
			});
		}
		toast("Must be logged in to add services to cart", { type: "error", autoClose: 2000 });
	};

	// console.log("services", services);

	return (
		<>
			<div className="row">
				<div className="col" size="md-6">
					<h1>
						<AppstoreOutlined /> Our Services
					</h1>
					{/* <label>
						<input name="React.js" type="checkbox" value="React.js" />
						React.js
					</label>
					<label>
						<input
							name="Vanilla JavaScript"
							type="checkbox"
							value="Vanilla JavaScript"
						/>
						Vanilla JavaScript
					</label>
					<label>
						<input name="HTML" type="checkbox" value="HTML" />
						HTML
					</label>
					<label>
						<input name="MySQL" type="checkbox" value="MySQL" />
						MySQL
					</label>
					<label>
						<input name="MongoDB" type="checkbox" value="MongoDB" />
						MongoDB
					</label>
					<label>
						<input name="Node.js" type="checkbox" value="Node.js" />
						Node.js
					</label> */}
					<div className="site-card-wrapper">
						<Row gutter={16}>
							{services.map((service, i) => {
								return (
									<Service
										key={i + "-service"}
										service={service}
										handleCart={selectService}
									/>
								);
							})}
							{/* {!checkFiltered
								? services.map((service, i) => {
										return (
											<Service
												key={i + "-service"}
												service={service}
												handleCart={selectService}
											/>
										);
								  })
								: filtered.map((service, i) => {
										return (
											<Service
												key={i + "-service"}
												service={service}
												handleCart={selectService}
											/>
										);
								  })} */}
						</Row>
					</div>
				</div>
			</div>
		</>
	);
};
export default Browse;
