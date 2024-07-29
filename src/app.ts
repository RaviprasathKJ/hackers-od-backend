import express from "express";

import { BASE_ROUTE as USER_BR, router as userRoute } from "./routes/userRoute";

const app = express();

app.use(express.json());

app.use(USER_BR, userRoute);

export default app;
