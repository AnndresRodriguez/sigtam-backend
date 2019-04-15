const express = require('express');
const router = express.Router();

const Citas = require("../models/model-citas");

router.get("/", async (req, res) => {
    const citas = await Citas.find();
    res.json(citas);
  });

module.exports = router