const router = require("express").Router();
// const servicesController = require("../../controllers/servicesController");

// Matches with "/api/books"
router.route("/checkout").post();
//   .post(servicesController.create);s

// write model for checkout: 
// write function in controller and then call it in the .post(here)

// future development, make cart persistent on refresh


module.exports = router;
