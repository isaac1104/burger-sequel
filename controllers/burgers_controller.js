const express = require("express");
const db = require("../models");
const router = express.Router();

router.get("/", (req, res) => {
  db.burgers.findAll({}).then((data) => {
    let hbsObject = {
      burger: data
    };
    res.render("index", hbsObject);
  });
});
//
router.post("/", (req, res) => {
  db.burgers.create({
    burger_name: req.body.burgers
  }).then((result) => {
    res.json(result);
  });
});
//
// router.put("/:id", (req, res) => {
//   var condition = "id = " + req.params.id;
//   burger.update({
//     devoured: req.body.devoured
//   }, condition, () => {
//     res.redirect("/");
//   });
// });
//
module.exports = router;
