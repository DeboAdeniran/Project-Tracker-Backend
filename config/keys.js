import { mongo } from "mongoose";
import dotenv from "dotenv";

dotenv.config();
export default {
  mongoURI: process.env.DBHOST,
};
