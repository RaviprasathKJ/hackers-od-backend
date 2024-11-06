import { pool } from '../config/config';
import { Request,Response } from 'express';
import { commonQueries } from '../queries';
import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../config/config';

const login = (req: Request, res: Response) => {
   pool.query(commonQueries.login, [req.body.email, req.body.password], (error, results) => {
      if(error) {
        return res.send(500).json({ error : 'Error logging in, try entering correct username & password' });
      } else if(results.rows.length === 0) {
        return res.status(404).json({ error: 'User not found' });
      } else {
        const user = results.rows[0];
        const token = jwt.sign({ user : user.admin_id, role : user.type }, JWT_SECRET, { expiresIn: '24h' });
        return res.status(200).json({ token, role : user.type });
      }
   }); 
}

const verifyToken = (req: Request, res: Response) => {
    const { token } = req.body ;
    if(!token) {
      return res.status(401).json({ error: 'No token provided' });
    }
    try {
      const decoded = jwt.verify(token, JWT_SECRET);
      return res.status(200).json({ decoded });
    } catch(error) {
      return res.status(401).json({ error: 'Invalid token' });
    }
}

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
      console.log(error.message);
      return res.status(500).json({ error: 'Error fetching pending students today' });
    }
    res.status(200).json(results.rows);
  });
};

export default {
  login,
  verifyToken,
  getAllStudents,
  getApprovedStudents,
  getRejectedStudents,
  getPendingStudents,
  getApprovedStudentsToday,
  getRejectedStudentsToday,
  getPendingStudentsToday
};

