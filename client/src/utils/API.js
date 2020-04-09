import axios from "axios";

export default {
  // Gets all books
  getServices: function () {
    console.log("we are in getServicess");
    return axios.get("/api/services");
  },
};
