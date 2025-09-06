import { config as dotenvConfig } from "dotenv";
import { cleanEnv, str, port } from "envalid";

dotenvConfig();

const env = cleanEnv(process.env, {
  PORT: port({ default: 8080 }),
  MONGO_URL: str({ default: "mongodb://localhost:27017/" }),
  MONGO_DB_NAME: str({ default: "portfolio" }),
});

export default env;
