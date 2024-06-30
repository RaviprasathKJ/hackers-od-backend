import express, { Response } from "express";
import { sucess } from "../errors";
import { pool } from "../config/db.config";

const router = express.Router();

const BASE_ROUTE = '/user';

router.get( '/', async ( _ , res: Response ) => {
  const client = await pool.connect();
  res.status(sucess.code).send(sucess.mess);
});

export {
  BASE_ROUTE,
  router
};
