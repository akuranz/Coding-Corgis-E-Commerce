const router = require("express").Router();
const checkoutController = require("../../controllers/checkoutController");

router.route("/").post(checkoutController.create);

module.exports = router;
