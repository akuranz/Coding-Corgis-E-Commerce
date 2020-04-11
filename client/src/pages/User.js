import React, { useEffect } from "react";
import API from "../utils/API";
import { useGlobalState } from "../utils/GlobalContext";

function User() {
  const [global, dispatch] = useGlobalState();

  useEffect(() => {
    API.checkAuth().then(({ data }) => {
      dispatch({
        type: "LOGIN_USER",
        payload: data.user,
      });
    });
  }, []);

  return <></>;
}
export default User;
