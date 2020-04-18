const router = require("express").Router();
const db = require("../../models");

router.post("/:id/:type", async (req, res) => {
  try {
    const newAddr = await db.Address.create(req.body);
    await db.User.findByIdAndUpdate(req.params.id, {
      $push: { [req.params.type]: newAddr._id },
    });
    const User = await db.User.findById(req.params.id).populate(
      "billingAddress"
    );
    res.json(User);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

module.exports = router;
