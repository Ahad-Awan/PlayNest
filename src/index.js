import dotenv from "dotenv";

dotenv.config({ path: "./env" });
import connectDB from "./db/index.js";

connectDB();

//? First Way to conncet MongoDB  connection

/*
import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";
dotenv.config();
const app = express();

(async () => {
  try {
    mongoose.connect(`${process.env.MONGODB_URI}/${process.env.DB_NAME}`);
    app.on("error", (error) => {
      console.error("Error", error);
      throw error;
    });
    // console.log("Connected to MongoDB");

    app.listen(process.env.PORT, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error;
  }
})();

*/
