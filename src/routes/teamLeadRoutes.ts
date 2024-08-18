import express from 'express';
import { teamleadControllers } from '../controllers'; 

const BASE_ROUTE = '/api';
const router = express.Router();

router.post('/sendRequest', teamleadControllers.sendRequest);

export default {
  BASE_ROUTE,
  router
}; 
