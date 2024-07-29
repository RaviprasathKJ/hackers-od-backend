import express, { Response } from "express";
import { sucess } from "../status";
import { loginUser, sesService } from "../controllers/userController";
import { AuthenticateUser } from "../middleware/authMiddleware";
const router = express.Router();

const BASE_ROUTE = '/user';

router.get( '/test', async ( _ , res: Response ) => {
  return res.status(sucess.code).send(sucess.mess);
});

router.post('/login', loginUser)

router.post('/ses', AuthenticateUser, sesService)

export {
  BASE_ROUTE,
  router
};
