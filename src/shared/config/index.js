import envConfig from "./env.config.js";
// import { connectDB } from "../../database/database.js";

export const initializeConfig = async () => {
  // const db = await connectDB(envConfig.dbUrl);

  return {
    // db,
    env: envConfig,
  };
};
