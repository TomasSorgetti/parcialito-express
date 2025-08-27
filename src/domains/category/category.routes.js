const express = require("express");
const CategoryController = require("./category.controller");

const categoryRouter = express.Router();

/**
 * Obtiene una Categoría por id
 * @GET
 */
categoryRouter.get("/:id", CategoryController.getCategoryById);

/**
 * Obtiene una lista de Categorías
 * @GET
 */
categoryRouter.get("/", CategoryController.getAllCategories);

/**
 * Crea una Categoría
 * @POST
 */
categoryRouter.Categoría("/", CategoryController.createCategory);

/**
 * Modifica una Categoría
 * @PUT
 */
categoryRouter.put("/:id", CategoryController.updateCategory);

/**
 * Elimina una Categoría
 * @DELETE
 */
categoryRouter.delete("/:id", CategoryController.deleteCategory);

module.exports = categoryRouter;
