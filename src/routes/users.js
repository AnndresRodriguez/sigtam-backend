import { Router } from "express";
const router = Router();
const models = require("../models");

router.get("/admin", async (req, res, next) => {
  const users = await models.User.findAll({
    where: {
      roleId: 1
    }
  });

  res.json(users);
});

router.get("/mecanicos", async (req, res, next) => {
  const users = await models.User.findAll({
    where: {
      roleId: 2
    }
  });
  res.json(users);
});

router.get("/cajeros", async (req, res, next) => {
  const users = await models.User.findAll({
    where: {
      roleId: 2
    }
  });

  res.json(users);
});

router.post("/agregar-usuario", async (req, res, next) => {

    await models.User.create({
      document: req.body.documentUser,
      email: req.body.emailUser,
      password: req.body.passwordUser,
      firstName: req.body.firstNameUser,
      lastName: req.body.lastNameUser,
      numberMobile: req.body.numberMobileUser,
      birthDate: req.body.birthDateUser,
      roleId: req.body.roleIdUser
    })
    .then(response => {
      res.status(200).json({
        inserted: true
      });
    // console.log(res);
    })
    .catch(err => console.log(err));
});

export default router;
