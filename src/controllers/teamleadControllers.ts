import { Request, Response } from 'express';
import { teamleadQueries } from '../queries';
import pool from '../config/db';

const sendRequest = async (req: Request, res: Response) => {
  const odDetailsArray = req.body;
  console.log(odDetailsArray);
  if (!Array.isArray(odDetailsArray) || odDetailsArray.length === 0) {
    return res.status(400).send('Invalid request: odDetailsArray should be a non-empty array.');
  }

  const client = await pool.connect();

  try {
    await client.query('BEGIN');

    const values = odDetailsArray.flatMap(details => [
      details.user_id,
      details.date,
      details.reason,
      details.request_by,
      details.status,
      details.from_time,
      details.to_time,
    ]);

    const query = teamleadQueries.sendRequest(odDetailsArray.length);
    const result = await client.query(query, values);

    await client.query('COMMIT');
    res.status(200).json({
      message: 'Records inserted successfully',
      records: result.rows,
    });
  } catch (err: any) {
    await client.query('ROLLBACK');
    console.error('Transaction error:', err.stack);
    res.status(500).send('User not found');
  } finally {
    client.release();
  }
};

export default { sendRequest } ;

