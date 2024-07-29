import serverless from 'serverless-http';

import app from "./app";
import { Response } from 'express';
import { sucess } from './status';
import { PORT } from './config/config';

app.get('/', ( _ , res: Response) => {
  res.status(sucess.code).send(sucess.mess);
})

app.listen(PORT, () => {
  console.log('\x1b[32m[info] : SERVER RUNNING AT ' + PORT + '\x1b[0m');
});

// export const handler = serverless(app);
