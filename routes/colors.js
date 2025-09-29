const router = require("express").Router();

const colorService = require('../services/ColorService');

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

  try {
    if (name == null)
      return res
        .status(400)
        .json({ status: 400, message: "Color name not provided" });

    await colorService.create(name);
    res.status(201).end();
  } catch (err) {
    console.log("Unable to create color", err);
    res
      .status(500)
      .json({ status: 500, message: "Internal Error", error: err.message });
  }
});

// TODO: We are using a DELETE method here
  // could also use a POST and send the name in the body and validate body property instead
router.delete("/:name", async (req, res) => {
  const name = req.params.name;

  try {

    const result = await colorService.delete(name);

    if(result === 0) return res.status(400).json({status:400, error:'Color name is invalid'});

    res.status(204).end();
  } catch (err) {
    console.log("Unable to delete color", err);
    res
      .status(500)
      .json({ status: 500, message: "Internal Error", error: err.message });
  }
});

module.exports = router;
