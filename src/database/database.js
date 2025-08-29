import mongoose from "mongoose";

export const connectDB = async (dbUrl) => {
  try {
    await mongoose.connect(dbUrl);
    console.log("Connected to MongoDB");
    return mongoose;
  } catch (err) {
    console.error("Failed to connect to MongoDB", err);
    throw err;
  }
};
