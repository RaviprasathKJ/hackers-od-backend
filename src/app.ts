import express from "express";
import cors from "cors"

import { BASE_ROUTE as USER_BR, router as userRoute } from "./routes/userRoute";
import { commonRoutes } from "./routes";
import { hodRoutes } from "./routes";
import { teamleadRoutes } from "./routes";

const COMMON_BR = commonRoutes.BASE_ROUTE;
const HOD_BR = hodRoutes.BASE_ROUTE;
const TEAMLEAD_BR = teamleadRoutes.BASE_ROUTE;
const HOD_ROUTER = hodRoutes.router;
const COMMON_ROUTER = commonRoutes.router;
const TEAMLEAD_ROUTER = teamleadRoutes.router;
const app = express();

const corsOptions = {
  origin: '*',
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(USER_BR, userRoute);
app.use(COMMON_BR, COMMON_ROUTER);
app.use(HOD_BR, HOD_ROUTER);
app.use(TEAMLEAD_BR,TEAMLEAD_ROUTER);

export default app;
