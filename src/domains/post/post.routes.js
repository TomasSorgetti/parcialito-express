const express = require("express");

const postRouter = express.Router();

/**
 * Obtiene un Post por id
 * @GET
 */
postRouter.get("/:id", (req, res) => {
  res.status(200).json({ msg: "OK" });
});

/**
 * Obtiene una lista de Posts
 * @GET
 */
postRouter.get("/", (req, res) => {
  res.status(200).json({ msg: "OK" });
});

/**
 * Crea un Post
 * @POST
 */
postRouter.post("/", (req, res) => {
  res.status(200).json({ msg: "OK" });
});

/**
 * Modifica un Post
 * @PUT
 */
postRouter.put("/:id", (req, res) => {
  res.status(200).json({ msg: "OK" });
});

/**
 * Elimina un Post
 * @DELETE
 */
postRouter.delete("/:id", (req, res) => {
  res.status(200).json({ msg: "OK" });
});

module.exports = postRouter;
