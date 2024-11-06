import express from 'express';
import { teamleadControllers } from '../controllers'; 
import { AuthenticateUser } from '../middleware/authMiddleware'; 

const BASE_ROUTE = '/api';
const router = express.Router();

router.use(AuthenticateUser);

router.post('/sendRequest', teamleadControllers.sendRequest);

export default {
  BASE_ROUTE,
  router
}; 
