const express = require("express");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const port = process.env.PORT || 3000;
const app = express();
const exphbs = require("express-handlebars");
const routes = require("./controllers/burgers_controller.js");
const path = require("path");
const db = require(path.join(__dirname, "/models"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(express.static("public"));
app.use(methodOverride("_method"));
app.use("/", routes);

require("./controllers/burgers_controller.js")(app);

db.sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log("server listening on " + port);
  });
});
