const server = require("./src/server");
const dotenv = require("dotenv");
dotenv.config();

const port = process.env.PORT || 8081;

server.listen(port, () => {
  console.log("- - - - - - - - - - - - - - - - -");
  console.log(`Server running on http://localhost:${port}`);
  console.log("- - - - - - - - - - - - - - - - -");
});
