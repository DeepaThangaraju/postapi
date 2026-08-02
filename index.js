import express from "express";

import "dotenv/config";
import postRoutes from "./Routes/postRoutes.js";
import { connectDb } from "./connections/connectDb.js";
import cors from "cors";


const app = express();
app.use(express.json());
app.use(cors());

const port = process.env.PORT || 9000;
connectDb(process.env.MONGO_URL);
app.use("/api", postRoutes)

app.listen(port, () => {
    console.log("Port listening", port)
});
