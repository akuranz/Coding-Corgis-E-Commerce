import axios from "axios";

export default {
  // Gets all books
  getServices: function () {
    console.log("we are in getServicess");
    return axios.get("/api/services");
  },
  checkAuth: () => axios.get("/auth"),

  getOrders: function () {
    console.log("we are in getServicess");
    return axios.get("/api/orderHistory");
  },

  // getUser: function () {
  //   console.log("we are in getServicess");
  //   return axios.get("/api/user");
  // },

};
