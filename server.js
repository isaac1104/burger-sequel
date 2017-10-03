const express = require("express");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const PORT = process.env.PORT || 3000;
const app = express();
const exphbs = require("express-handlebars");
const routes = require("./controllers/burgers_controller.js");
const db = require("./models");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(express.static("public"));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(methodOverride("_method"));
app.use("/", routes);

db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log("server listening on " + PORT);
  });
});
