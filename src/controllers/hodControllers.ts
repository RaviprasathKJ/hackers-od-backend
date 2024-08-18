import { Request, Response } from 'express';
import { hodQueries } from '../queries';
import pool from '../config/db';

const acceptRequest = (req: Request, res: Response) => { 

  const userIds: number[] = req.body.userIds;

  pool.query(hodQueries.acceptRequest,[userIds],(error, results) => {
    if (error) {
      return res.status(500).json({ error: 'Error accepting request' });
    }
    res.status(200).json({ message: 'Request accepted',rowCount: results.rowCount});
  });
}


const rejectRequest = (req: Request, res: Response) => {
  
  const userIds: number[] = req.body.userIds;

  pool.query(hodQueries.rejectRequest,[userIds],(error, results) => {
    if(error){
        return res.status(500).json({ error: 'Error rejecting request' });
    }
    res.status(200).json({ message: 'Request rejected',rowCount: results.rowCount});
  });

};


export default {
    acceptRequest,
    rejectRequest
};
