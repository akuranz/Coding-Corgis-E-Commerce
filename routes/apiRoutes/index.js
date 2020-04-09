const router = require("express").Router();

router.use("/services", require("./services"));

module.exports = router;
