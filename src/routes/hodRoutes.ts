import express from 'express';
import { hodControllers } from '../controllers'; 
import { AuthenticateUser } from '../middleware/authMiddleware';


const BASE_ROUTE = '/api';
const router = express.Router();


router.use(AuthenticateUser);

router.post('/acceptRequest', hodControllers.acceptRequest);
router.post('/rejectRequest', hodControllers.rejectRequest);


export default {
  BASE_ROUTE,
  router
}; 
