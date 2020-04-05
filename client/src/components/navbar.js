import React from "react";
import { Link } from "react-router-dom";
// import logo from "../logo.svg";
import "../App.css";
import axios from "axios";

const Navbar = (props) => {
  const logout = (event) => {
    event.preventDefault();
    console.log("logging out");
    axios
      .post("/auth/logout")
      .then((response) => {
        console.log(response.data);
        if (response.status === 200) {
          props.updateUser({
            loggedIn: false,
            username: null,
          });
        }
      })
      .catch((error) => {
        console.log("Logout error");
      });
  };

  const loggedIn = props.loggedIn;
  console.log("navbar render, props: ");
  console.log(props);

  return (
    <div>
      <header className="navbar" id="nav-container">
        <div className="col-4">
          {loggedIn ? (
            <section className="navbar-section">
              <Link
                to="#"
                className="btn btn-link text-secondary"
                onClick={logout}
              >
                <span className="text-secondary">logout</span>
              </Link>
            </section>
          ) : (
            <section className="navbar-section">
              <Link to="/" className="btn btn-link text-secondary">
                <span className="text-secondary">home</span>
              </Link>
              <Link to="/login" className="btn btn-link text-secondary">
                <span className="text-secondary">login</span>
              </Link>
              <Link to="/signup" className="btn btn-link">
                <span className="text-secondary">sign up</span>
              </Link>
            </section>
          )}
        </div>
      </header>
    </div>
  );
};

export default Navbar;
