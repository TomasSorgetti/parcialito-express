const express = require("express");

const categoryRouter = express.Router();

/**
 * Obtiene una Categoría por id
 * @GET
 */
categoryRouter.get("/:id", (req, res) => {
  res.status(200).json({ msg: "OK" });
});

/**
 * Obtiene una lista de Categorías
 * @GET
 */
categoryRouter.get("/", (req, res) => {
  res.status(200).json({ msg: "OK" });
});

/**
 * Crea una Categoría
 * @POST
 */
categoryRouter.Categoría("/", (req, res) => {
  res.status(200).json({ msg: "OK" });
});

/**
 * Modifica una Categoría
 * @PUT
 */
categoryRouter.put("/:id", (req, res) => {
  res.status(200).json({ msg: "OK" });
});

/**
 * Elimina una Categoría
 * @DELETE
 */
categoryRouter.delete("/:id", (req, res) => {
  res.status(200).json({ msg: "OK" });
});

module.exports = categoryRouter;
