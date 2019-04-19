const express = require('express');
const router = express.Router();
const Admin = require("../models/model-admin");

//Obtener Admins

router.get("/", async (req, res) => {
  const admin = await Admin.find()
  res.json(admin);
});

//Obtener Admin por id
router.get('/:id', async (req, res) => {
  const admin = await Admin.findById(req.params.id)
  res.json(admin)
});

//Almacenar Admin
router.post("/", async (req, res) => {
  const admin = new Admin(req.body);
  await admin.save();
  res.json({
    archived: true
  });
});

//Editar Admin
router.put("/:id", async (req, res) => {
  await Admin.findByIdAndUpdate(req.params.id, req.body);
  res.json({
    updated:true
  });
});

//Eliminar Admin
router.delete("/:id", async (req, res) => {
  await Task.findByIdAndRemove(req.params.id);
  res.json({
    removed:true
  });
});

module.exports = router
