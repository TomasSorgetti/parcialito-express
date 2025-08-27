const express = require("express");

const articleRouter = express.Router();

/**
 * Obtiene un Post por id
 * @GET
 */
articleRouter.get("/:id", (req, res) => {
  res.status(200).json({ msg: "OK" });
});

/**
 * Obtiene una lista de Posts
 * @GET
 */
articleRouter.get("/", (req, res) => {
  res.status(200).json({ msg: "OK" });
});

/**
 * Crea un Post
 * @POST
 */
articleRouter.post("/", (req, res) => {
  res.status(200).json({ msg: "OK" });
});

/**
 * Modifica un Post
 * @PUT
 */
articleRouter.put("/:id", (req, res) => {
  res.status(200).json({ msg: "OK" });
});

/**
 * Elimina un Post
 * @DELETE
 */
articleRouter.delete("/:id", (req, res) => {
  res.status(200).json({ msg: "OK" });
});

module.exports = articleRouter;
