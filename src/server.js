const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const mainRouter = require("./routes");

const dotenv = require("dotenv");
dotenv.config();

const port = process.env.PORT || 8081;

const server = express();

server.use(express.json());
server.use(morgan("dev"));
server.use(cors());

server.use("/api", mainRouter);

server.listen(port, () => {
  console.log("- - - - - - - - - - - - - - - - -");
  console.log(`Server running on http://localhost:${port}`);
  console.log("- - - - - - - - - - - - - - - - -");
});
