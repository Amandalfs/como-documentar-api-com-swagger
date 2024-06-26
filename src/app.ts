import express from "express";
import cors  from "cors";
import { routes } from "./routers/users.router";

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes)

export { app };
