import express, { json } from "express";
import "reflect-metadata";
import "express-async-errors";
import cors from "cors";

import middlewares from "./middlewares";

const app = express();
app.use(json());
app.use(cors({ origin: "http://localhost:5173" }));

app.use(middlewares.handleError);

export default app;
