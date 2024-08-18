import express from 'express';
import { commonControllers }  from '../controllers';

const BASE_ROUTE = '/api';
const router = express.Router();

// Route to get all students
router.get('/students', commonControllers.getAllStudents);

// Route to get approved students
router.get('/approved-students', commonControllers.getApprovedStudents);

// Route to get rejected students
router.get('/rejected-students', commonControllers.getRejectedStudents);

// Route to get pending students
router.get('/pending-students', commonControllers.getPendingStudents);

// Route to get approved students today
router.get('/approved-students/today', commonControllers.getApprovedStudentsToday);

// Route to get rejected students today
router.get('/rejected-students/today', commonControllers.getRejectedStudentsToday);

// Route to get pending students today
router.get('/pending-students/today', commonControllers.getPendingStudentsToday);

export default {
  BASE_ROUTE,
  router
} ;

