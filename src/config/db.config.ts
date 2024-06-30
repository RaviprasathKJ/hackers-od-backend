import { Pool } from 'pg';
import { DB_HOST, DB_NAME, DB_PASS, DB_PORT, DB_USER } from './config';

const pool = new Pool({
  user: DB_USER,
  host: DB_HOST,
  password: DB_PASS,
  port: DB_PORT,
  database: DB_NAME,
});

export { pool };
