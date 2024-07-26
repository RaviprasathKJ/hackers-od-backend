import express, { Response } from "express";
import { sucess } from "../errors";
const router = express.Router();

const BASE_ROUTE = '/user';

router.get( '/', async ( _ , res: Response ) => {
  res.status(sucess.code).send(sucess.mess);
});

export {
  BASE_ROUTE,
  router
};
