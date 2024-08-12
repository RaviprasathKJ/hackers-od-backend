import serverless from 'serverless-http';

import app from "./app";
import { Response } from 'express';
import { sucess } from './status';
app.get('/', ( _ , res: Response) => {
  res.status(sucess.code).send(sucess.mess);
})

export const handler = serverless(app);
