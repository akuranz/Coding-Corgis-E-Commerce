import React, { useState } from "react";
import { useGlobalState } from "../utils/GlobalContext";
import { Link } from "react-router-dom";
import axios from "axios";

function AddAddress(props) {
  const { type } = props.location.state;
  console.log(type);
  const [global, dispatch] = useGlobalState();
  const [state, setState] = useState({
    street: "",
    city: "",
    state: "",
    country: "",
    zip_code: "",
  });

  const handleInput = ({ target }) => {
    setState({
      ...state,
      [target.name]: target.value,
    });
  };

  const handleSubmit = async () => {
    try {
      const URL = `/api/address/${global.user._id}/${type}`;
      const response = await axios.post(URL, state);
      console.log(response);
      dispatch({
        type: "LOGIN_USER",
        payload: response.data,
      });
    } catch (error) {
      console.warn(error);
    }
  };

  return (
    <>
      <input type="text" name="street" onChange={handleInput} />
      <input type="text" name="city" onChange={handleInput} />
      <input type="text" name="state" onChange={handleInput} />
      <input type="text" name="country" onChange={handleInput} />
      <input type="text" name="zip_code" onChange={handleInput} />
      <button onClick={handleSubmit}>Save</button>
      <Link to="/checkout">Return to Checkout</Link>
    </>
  );
}

export default AddAddress;
