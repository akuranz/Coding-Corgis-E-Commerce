const router = require("express").Router();

router.use("/services", require("./services"));
router.use("/checkout", require("./checkout"));
router.use("/address", require("./address"));

module.exports = router;
