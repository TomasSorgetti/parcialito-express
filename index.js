import server from "./src/server.js";
import dotenv from "dotenv";
dotenv.config();

const port = process.env.PORT || 8081;

server.listen(port, () => {
  console.log("- - - - - - - - - - - - - - - - -");
  console.log(`Server running on http://localhost:${port}`);
  console.log("- - - - - - - - - - - - - - - - -");
});
