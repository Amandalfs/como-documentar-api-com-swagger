import express from "express";
import cors  from "cors";
import { routes } from "./routers/users.router";

import swaggerUi from "swagger-ui-express";
import swaggerDocument from "./swagger.json";


const app = express();

app.use(cors());
app.use(express.json());
app.use(routes)

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

export { app };
