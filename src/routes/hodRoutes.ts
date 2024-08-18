import express from 'express';
import { hodControllers } from '../controllers'; 


const BASE_ROUTE = '/api';
const router = express.Router();



router.post('/acceptRequest', hodControllers.acceptRequest);
router.post('/rejectRequest', hodControllers.rejectRequest);


export default {
  BASE_ROUTE,
  router
}; 
