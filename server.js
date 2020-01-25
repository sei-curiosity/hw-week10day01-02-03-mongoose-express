const express = require("express");
const morgan = require("morgan");
const methodOverride = require("method-override");

const routes = require("./routes");
const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

app.set("view engine", "hbs");

app.use(routes);

app.listen(8000, () =>
  console.log("Server is running at http://localhost:8000/ ...")
);
