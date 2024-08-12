import express from "express";
import cors from "cors"

import { BASE_ROUTE as USER_BR, router as userRoute } from "./routes/userRoute";

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

export default app;
