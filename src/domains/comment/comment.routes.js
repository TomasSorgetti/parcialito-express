import express from "express";
import CommentController from "./comment.controller.js";

const commentRouter = express.Router();

/**
 * Obtiene un Comentario por id
 * @GET
 */
commentRouter.get("/:id", CommentController.getCommentById);

/**
 * Obtiene una lista de Comentarios
 * @GET
 */
commentRouter.get("/", CommentController.getAllComments);

/**
 * Crea un Comentario
 * @POST
 */
commentRouter.post("/", CommentController.createComment);

/**
 * Modifica un Comentario
 * @PUT
 */
commentRouter.put("/:id", CommentController.updateComment);

/**
 * Elimina un Comentario
 * @DELETE
 */
commentRouter.delete("/:id", CommentController.deleteComment);

export default commentRouter;
