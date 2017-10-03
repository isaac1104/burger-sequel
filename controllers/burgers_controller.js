const db = require("../models");

module.exports = ((app) => {
  app.get("/", (req, res) => {
    db.burgers.findAll({}).then((data) => {
      const hbsObhect = {
        burger: data
      };
      res.render("index", hbsObject);
      res.json(data);
    });
  });
});

// router.get("/", (req, res) => {
//   burger.all((data) => {
//     let hbsObject = {
//       burger: data
//     };
//     console.log(hbsObject);
//     res.render("index", hbsObject);
//   });
// });
//
// router.post("/", (req, res) => {
//   burger.create([
//     "burger_name"
//   ], [
//     req.body.burgers
//   ], () => {
//     res.redirect("/");
//   });
// });
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
// module.exports = router;
