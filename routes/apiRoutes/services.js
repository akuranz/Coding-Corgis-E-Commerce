const router = require("express").Router();
const servicesController = require("../../controllers/servicesController");

// Matches with "/api/books"
router.route("/").get(servicesController.findAll);
//   .post(servicesController.create);s

// Matches with "/api/books/:id"
// router
//   .route("/:id")
//   .get(servicesController.findById)
//   .put(servicesController.update)
//   .delete(servicesController.remove);

module.exports = router;
