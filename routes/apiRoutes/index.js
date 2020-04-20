const router = require("express").Router();

router.use("/services", require("./services"));
router.use("/checkout", require("./checkout"));
router.use("/address", require("./address"));
router.use("/orderHistory", require("./orderHistory"));
// router.use("/user", require("./user"));


module.exports = router;
