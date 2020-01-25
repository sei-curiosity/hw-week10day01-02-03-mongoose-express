const express = require("express");
const morgan = require("morgan");

const routes = require("./routes");
const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

app.listen(8000, () =>
  console.log("Server is running at http://localhost:8000/ ...")
);
