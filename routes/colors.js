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

router.post("/", async (req, res) => {
  const { name } = req.body;
  
  console.log(req.body);
  
  try {
    if (name == null)
      return res
        .status(400)
        .json({ status: 400, message: "Color name was not provided" });

    await colorService.create(name);
    res.status(201).end();
  } catch (err) {
    console.log("Unable to create color", err);
    res
      .status(500)
      .json({ status: 500, message: "Internal Error", error: err.message });
  }
});

module.exports = router;
