const router = require("express").Router();
const db = require("../models");

const ColorService = require("../services/ColorService");
const colorService = new ColorService(db);

router.get("/", async (_, res) => {
  try {
    const colors = await colorService.getAll();

    res.render("colors", { colors });
  } catch (err) {
    console.log("Unable to retrieve colors", err);
    res
      .status(500)
      .json({ status: 500, message: "Internal Error", error: err.message });
  }
});

module.exports = router;
