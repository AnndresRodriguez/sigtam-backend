import { Router } from "express";
const router = Router();
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const formatDate = require('../services/util').default
const adapter = new FileSync('db.json')
const db = low(adapter)

router.get("/", (req, res, next) => {
  
  const roles = db.getState()
  res.json(roles);
});

router.get("/:id", (req, res, next) => {
  
  const roles = db.get('roles')
  .find({ id: req.params.id })
  .value()
  res.json(roles)
});

router.post("/add", (req, res, next) => {
  
     const data = db.get('roles')
    .push(req.body)
    .last()
    .assign({ createdAt: formatDate.date(), createdHour: formatDate.hour() })
    .write()
    
    res.json(data)
   
  });

router.put("/:id", async (req, res) => {
  
  const roles = db.get('roles')
  .find({ id: req.params.id })
  .assign(req.body)
  .write()
  res.json(roles)
  
});

router.delete("/:id", async (req, res, next) => {

    const roles = db.get('roles')
    .remove({id: req.params.id})
    .write()
    res.json(roles)

});

module.exports = router;
