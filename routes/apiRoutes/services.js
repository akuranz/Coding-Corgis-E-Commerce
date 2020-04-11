const router = require("express").Router();
const servicesController = require("../../controllers/servicesController");

router.route("/").get(servicesController.findAll);
//   .post(servicesController.create);s

// router
//   .route("/:id")
//   .get(servicesController.findById)
//   .put(servicesController.update)
//   .delete(servicesController.remove);

module.exports = router;
