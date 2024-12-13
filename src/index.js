import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import connectDB from "./db/index.js";
import dotenv from "dotenv";
import express from "express";
const app = express();
dotenv.config({
    path: "./env"
});


connectDB();











// (async () => {
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`, {
//         });
//         console.log("Connected to the database");
//         app.on("error", (error) => {
//             console.error("Error starting the server: ", error)
//         })
//         app.listen(process.env.PORT, () => {
//             console.log(`Server is running on port ${process.env.PORT}`);
//         });
//     } catch (error) {
//         console.error("Error connecting to the database: ", error);
//     }
// })()