const express = require("express");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const port = process.env.PORT || 3000;
const app = express();
const exphbs = require("express-handlebars");
const routes = require("./controllers/burgers_controller.js");
const path = require("path");
const db = require(path.join(__dirname, "/models"));

app.use(bodyParser.urlencoded({ extended: false }));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));

app.set("view engine", "handlebars");

app.use(express.static("public"));
app.use(methodOverride("_method"));
app.use("/", routes);

db.sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log("server listening on " + port);
  });
});
