import { Router } from "express";
const router = Router();
const models = require("../models");

router.get("/", async (req, res, next) => {
    const roles = await models.role.findAll({
        attributes: ['name', 'createdAt', 'updatedAt']
    }
  );
  res.json(roles);
});

router.get("/:id", async (req, res, next) => {
  const role =  await models.role.findAll({
    where: {
      id: req.params.id
    }
  });
  res.json(role);
});

router.post("/add", async (req, res, next) => {
    let dataAdmin = req.body;
  
    await models.role.create({
        name: dataAdmin.name
      })
      .then(res => console.log(res))
      .catch(err => console.log(err));
  
    res.status(200).json({
      inserted: true
    });
  });

router.put("/:id", async (req, res) => {
    await models.role.update(
    {
      name: req.body.newName
    },
    {
      where: {
        id: req.params.id
      }
    }
  );
  res.json({
    status: "Role updated"
  });
});

router.delete("/:id", async (req, res, next) => {

   await models.role.destroy({
        where:{
            id: req.params.id
        }
    })

    res.json({
        status:"Role Deleted"
    })


});

module.exports = router;
