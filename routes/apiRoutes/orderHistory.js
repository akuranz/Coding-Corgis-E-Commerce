const router = require("express").Router();
const orderHistoryController = require("../../controllers/orderHistoryController");

console.log("OH route check 1");
router.route("/").get(orderHistoryController.findOrders);
console.log("OH route check after 1");
module.exports = router;
