const express = require("express");
const ArticleController = require("./article.controller");

const articleRouter = express.Router();

/**
 * Obtiene un Post por id
 * @GET
 */
articleRouter.get("/:id", ArticleController.getArticleById);

/**
 * Obtiene una lista de Posts
 * @GET
 */
articleRouter.get("/", ArticleController.getAllArticles);

/**
 * Crea un Post
 * @POST
 */
articleRouter.post("/", ArticleController.createArticle);

/**
 * Modifica un Post
 * @PUT
 */
articleRouter.put("/:id", ArticleController.updateArticle);

/**
 * Elimina un Post
 * @DELETE
 */
articleRouter.delete("/:id", ArticleController.deleteArticle);

module.exports = articleRouter;
