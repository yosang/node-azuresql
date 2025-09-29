const router = require("express").Router();
const CityService = require("../services/CityService");

// GET operation
router.get("/", async (_, res) => {
  try {
    const cities = await CityService.getAll();
    res.render("cities", { cities });
  } catch (err) {
    console.log("Unable to contact database", err);
    res.status(500).json({ status: 500, message: "Internal Server Error", error: err.message });
  }
});

// POST operation
router.post("/", async (req, res) => {
  const { name, country } = req.body

  try {

    if(name === null || country === null || name === undefined || country === undefined ) return res.status(400).json( { status:400, message:'Name or country not provided' } )

    await CityService.create(name, country);
    res.status(201).end();
  } catch (err) {
    console.log("Unable to contact database", err);
    res.status(500).json({ status: 500, message: "Internal Server Error", error: err.message });
  }
});

// DELETE operation
router.delete("/:id", async (req, res) => {
  const { id } = req.params
    try {

    await CityService.delete(id)
    res.status(204).end()
  } catch (err) {
    console.log("Unable to contact database", err);
    res.status(500).json({ status: 500, message: "Internal Server Error", error: err.message });
  }
});

module.exports = router;
