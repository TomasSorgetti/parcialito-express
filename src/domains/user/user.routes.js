import express from "express";

const userRouter = express.Router();

/**
 * Obtiene un Usuario por id
 * @GET
 */
userRouter.get("/:id", (req, res) => {
  res.status(200).json({ msg: "OK" });
});

/**
 * Obtiene una lista de Usuarios
 * @GET
 */
userRouter.get("/", (req, res) => {
  res.status(200).json({ msg: "OK" });
});

/**
 * Modifica un Usuario
 * @PUT
 */
userRouter.put("/", (req, res) => {
  res.status(200).json({ msg: "OK" });
});

/**
 * Elimina un Usuario
 * @DELETE
 */
userRouter.delete("/", (req, res) => {
  res.status(200).json({ msg: "OK" });
});

export default userRouter;
