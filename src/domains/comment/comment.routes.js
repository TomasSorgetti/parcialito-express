const express = require("express");

const commentRouter = express.Router();

/**
 * Obtiene un Comentario por id
 * @GET
 */
commentRouter.get("/:id", (req, res) => {
  res.status(200).json({ msg: "OK" });
});

/**
 * Obtiene una lista de Comentarios
 * @GET
 */
commentRouter.get("/", (req, res) => {
  res.status(200).json({ msg: "OK" });
});

/**
 * Crea un Comentario
 * @POST
 */
commentRouter.post("/", (req, res) => {
  res.status(200).json({ msg: "OK" });
});

/**
 * Modifica un Comentario
 * @PUT
 */
commentRouter.put("/:id", (req, res) => {
  res.status(200).json({ msg: "OK" });
});

/**
 * Elimina un Comentario
 * @DELETE
 */
commentRouter.delete("/:id", (req, res) => {
  res.status(200).json({ msg: "OK" });
});

module.exports = commentRouter;
