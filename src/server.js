const express = require("express");
const path = require("path");
const morgan = require("morgan");
const cors = require("cors");

const mainRouter = require("./routes");

const server = express();

server.use(express.json());
server.use(morgan("dev"));
server.use(cors());
server.use(express.static(path.join(__dirname, "../public")));

server.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public", "index.html"));
});

server.use("/api", mainRouter);

module.exports = server;
