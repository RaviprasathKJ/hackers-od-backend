//import serverless from 'serverless-http';


import app from "./app";
import { Response } from 'express';
import { sucess } from './status';
import { PORT } from './config/config';
import { Connect } from './config/config';

Connect();

app.get('/', ( _ , res: Response) => {
  res.status(sucess.code).send(sucess.mess);
})

app.listen(PORT, () => {
   console.log(`Server is running on port ${PORT}`); 
});
//export const handler = serverless(app);
