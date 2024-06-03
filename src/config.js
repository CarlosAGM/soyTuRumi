import dotenv from "dotenv";
dotenv.config();
export const TOKEN_SECRETO = process.env.TOKEN_SECRETO;
export const PUERTO = process.env.PUERTO || 4000;
export const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost/soyturumi";

export const CLOUD_NAME = process.env.CLOUD_NAME;
export const API_KEY = process.env.API_KEY;
export const API_SECRET = process.env.API_SECRET;
