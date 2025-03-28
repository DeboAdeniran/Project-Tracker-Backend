import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import keys from "./config/keys.js";
import corsMiddleware from "./middleware/corsMiddleware.js";
import router from "./routes/api/project.js";
import dotenv from "dotenv";

dotenv.config();
const app = express();

app.use(corsMiddleware);
app.use(bodyParser.json());
app.use("/api/projects", router);

const db = keys.mongoURI;
console.log(db);

mongoose
  .connect(db)
  .then(() => {
    console.log("MongoDB connected........");
  })
  .catch((err) => {
    console.log(err);
  });

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => res.send("Hello World!"));
app.listen(PORT, () => console.log(`App running on http://localhost:${PORT}`));
