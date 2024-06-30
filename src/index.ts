import serverless from 'serverless-http';

import app from "./app";
import { Response } from 'express';
import { sucess } from './errors';
import { PORT } from './config/config';

app.get('/', ( _ , res: Response) => {
  res.status(sucess.code).send(PORT);
})

app.listen(PORT, () => {
  console.log('\x1b[32m',"[info] : SERVER RUNNNG AT PORT 6969")
});

// export const handler = serverless(app);
