const router = require("express").Router();
const checkoutController = require("../../controllers/checkoutController");

router.route("/").post(checkoutController.create);
// .get(serviceController.findByIdAndUpdate);

// router.route("/checkout/:id").get(servicesController.findByIdAndUpdate);
// .put(servicesController.update)
// .delete(servicesController.remove);

// write model for checkout:
// write function in controller and then call it in the .post(here)

// future development, make cart persistent on refresh

module.exports = router;
