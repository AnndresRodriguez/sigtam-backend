import { Router } from "express";
const router = Router();
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const formatDate = require('../services/util').default
const adapter = new FileSync('db.json')
const db = low(adapter)

router.get("/admin", async (req, res, next) => {
  const users = null
  res.json(users);
});

router.get("/mecanicos", (req, res, next) => {
  const mechanics = db.get('mecanicos')
  res.json(mechanics);
});

router.get("/cajeros", async (req, res, next) => {
  const users = null
  res.json(users);
});

router.post("/agregar-usuario", async (req, res, next) => {

});

export default router;
