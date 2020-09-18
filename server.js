const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");

//const db = require("./db");
const todoRouter = require("./routes/todo-router");
const routes = require("./routes");

const app = express();
const apiPort = process.env.PORT || 8000;

require("./models");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

//db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.use(express.static("client/build"));

app.use(routes);

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`));
