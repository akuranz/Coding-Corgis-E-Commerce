const router = require("express").Router();
const servicesController = require("../../controllers/servicesController");

router.route("/").get(servicesController.findAll);

module.exports = router;
