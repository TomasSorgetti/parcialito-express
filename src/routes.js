const express = require("express");

const mainRouter = express.Router();

mainRouter.use("/ping", (req, res) => {
  res.send("Pong");
});

mainRouter.use("/api", (req, res) => {
  res.status(200).json({ msg: "OK" });
});

module.exports = mainRouter;
