import express from "express";
import { initializeConfig } from "./shared/config/index.js";
import morgan from "morgan";
import cors from "cors";
import Container from "./di/container.js";
import MainRouter from "./routes/main.router.js";
import errorMiddleware from "./shared/middlewares/error.middleware.js";

import { fileURLToPath } from "url";
import path from "path";
// import { handler as ssrHandler } from "../public/dist/server/entry.mjs";

initializeConfig()
  .then((config) => {
    const server = express();

    server.use(express.json());
    server.use(morgan("dev"));
    server.use(cors());

    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    server.use(express.static(path.join(__dirname, "../public")));
    server.get("/", (req, res) => {
      res.sendFile(path.join(__dirname, "../public", "index.html"));
    });
    // server.get("/", ssrHandler);

    const container = new Container(config);
    const dependencies = container.getDependencies();

    const mainRouter = new MainRouter(dependencies);
    server.use("/api", mainRouter.getRouter());

    server.use(errorMiddleware);

    const port = config.env.PORT;

    server.listen(port, () => {
      console.log("- - - - - - - - - - - - - - - - -");
      console.log(`Server running on http://localhost:${port}`);
      console.log("- - - - - - - - - - - - - - - - -");
    });
  })
  .catch((error) => {
    console.error("Failed to initialize config", error);
    process.exit(1);
  });
