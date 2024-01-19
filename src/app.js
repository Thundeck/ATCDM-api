const express = require("express");
const cookieParser = require("cookie-parser");
const { urlencoded, json } = require("body-parser");
const morgan = require("morgan");
const routes = require("./routes/index.js");
const { config } = require("dotenv");
config();

const server = express();

server.name = "API";

server.use(urlencoded({ extended: true, limit: "50mb" }));
server.use(json({ limit: "50mb" }));
server.use(cookieParser());
server.use(morgan("dev"));
server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

server.use("/", routes);

server.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send({ message: err.message });
});

server.use((err, req, res, next) => {
  console.error(err.stack);
  const status = err.status || 500;
  const message = err.message || "ERROR";
  res.status(status).send({ message: message });
});

module.exports = server;
