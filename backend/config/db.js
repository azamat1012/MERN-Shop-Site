import mongoose from "mongoose";

export const connectDB = async () => {
  const MONGO_URI = process.env.MONGO_URI;
  try {
    const conn = mongoose.connect(MONGO_URI);
    console.log(
      `MongoDB is connected successfully: ${(await conn).connection.host}`
    );
  } catch (error) {
    console.log("Error while connecting to the server: " + error);
    process.exit(1);
  }
};
