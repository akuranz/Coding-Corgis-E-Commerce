const router = require("express").Router();

router.use("/api", require("./apiRoutes"));
router.use("/auth", require("./authRoutes"));

module.exports = router;
