import express from "express";
import morgan from "morgan";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

import Container from "./di/container.js";
import MainRouter from "./routes/main.router.js";

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

const container = new Container();
const dependencies = container.getDependencies();

const mainRouter = new MainRouter(dependencies);
server.use("/api", mainRouter.getRouter());

export default server;
