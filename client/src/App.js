import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
// import axios from "axios";

// components
import AllLayout from "./components/AllLayout";

// other
import "./App.css";
import { GlobalStateProvider } from "./utils/GlobalContext";
import User from "./pages/User";
import AddAddress from "./pages/AddAddress";

const App = () => {
	return (
		<Router>
			<GlobalStateProvider>
				<User />
				<AllLayout />
			</GlobalStateProvider>
		</Router>
	);

}

export default App;
