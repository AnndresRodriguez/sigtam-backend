const express = require('express');
const router = express.Router();
const Chasis = require("../models/model-chasis");
router.get("/", async (req, res) => {
    const chasis = await Chasis.find();
    res.json(chasis);
});



module.exports = router