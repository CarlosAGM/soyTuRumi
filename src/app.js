import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors";
import fileUpload from "express-fileupload";

import authRutas from "./routes/auth.routes.js";
import rumiRutas from "./routes/rumi.routes.js";

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());

app.use(
  fileUpload({
    tempFileDir: "./imagenes",
    useTempFiles: true,
  })
);

app.use("/api", authRutas);
app.use("/api", rumiRutas);

export default app;
