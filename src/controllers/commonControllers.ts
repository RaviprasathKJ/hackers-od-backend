import { pool } from '../config/config';
import { Request,Response } from 'express';
import { commonQueries } from '../queries';


const getAllStudents = (_: Request, res: Response) => {
  pool.query(commonQueries.getAllStudents, (error, results) => {
    if (error) {
      return res.status(500).json({ error: 'Error fetching all students' });
    }
    res.status(200).json(results.rows);
  });
};

const getApprovedStudents = (_: Request, res: Response) => {
  pool.query(commonQueries.getApprovedStudents, (error, results) => {
    if (error) {
      return res.status(500).json({ error: 'Error fetching approved students' });
    }
    res.status(200).json(results.rows);
  });
};

const getRejectedStudents = (_: Request, res: Response) => {
  pool.query(commonQueries.getRejectedStudents, (error, results) => {
    if (error) {
      return res.status(500).json({ error: 'Error fetching rejected students' });
    }
    res.status(200).json(results.rows);
  });
};

const getPendingStudents = (_: Request, res: Response) => {
  pool.query(commonQueries.getPendingStudents, (error, results) => {
    if (error) {
      return res.status(500).json({ error: 'Error fetching pending students' });
    }
    res.status(200).json(results.rows);
  });
};

const getApprovedStudentsToday = (_: Request, res: Response) => {
  pool.query(commonQueries.getApprovedStudentsToday, (error, results) => {
    if (error) {
      return res.status(500).json({ error: 'Error fetching approved students today' });
    }
    res.status(200).json(results.rows);
  });
};

const getRejectedStudentsToday = (_: Request, res: Response) => {
  pool.query(commonQueries.getRejectedStudentsToday, (error, results) => {
    if (error) {
      return res.status(500).json({ error: 'Error fetching rejected students today' });
    }
    res.status(200).json(results.rows);
  });
};

const getPendingStudentsToday = (_: Request, res: Response) => {
  pool.query(commonQueries.getPendingStudentsToday, (error, results) => {
    if (error) {
      return res.status(500).json({ error: 'Error fetching pending students today' });
    }
    res.status(200).json(results.rows);
  });
};

export default {
  getAllStudents,
  getApprovedStudents,
  getRejectedStudents,
  getPendingStudents,
  getApprovedStudentsToday,
  getRejectedStudentsToday,
  getPendingStudentsToday
};

