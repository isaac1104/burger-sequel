const express = require("express");
const db = require("../models");
const router = express.Router();

router.get("/", (req, res) => {
  res.redirect("/burgers");
});

router.get("/burgers", (req, res) => {
  db.burgers.findAll({}).then((data) => {
    let hbsObject = {
      burger: data
    };
    return res.render("index", hbsObject);
  });
});

router.post("/", (req, res) => {
  db.burgers.create({
    burger_name: req.body.burgers
  }).then((result) => {
    res.json(result);
  });
  res.redirect("/");
});

router.put("/:id", (req, res) => {
  db.burgers.update({
    devoured: true
  }, {
    where: {
      id: req.params.id
    }
  }).then((result) => {
    res.redirect("/");
  });
});

module.exports = router;
