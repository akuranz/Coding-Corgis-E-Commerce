const router = require("express").Router();

router.use("/services", require("./services"));
router.use("/checkout", require("./checkout"));

module.exports = router;
