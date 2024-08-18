import pkg from "pg";
import dotenv from "dotenv";

dotenv.config();
const { Pool } = pkg;

const pool = new Pool({
  user: process.env.DB_USER || '',
  host: process.env.DB_HOST || '',
  database: process.env.DB_NAME || '',
  password: process.env.DB_PASS || '',
  port: parseInt(process.env.DB_PORT || "6543" ,10),
});

const Connect = async() => {
    try {
        const client = await pool.connect() ;
        console.log('Connected to the database') ;
        client.release();
    } catch(err) {
        console.log(err) ;
    }
};


export default pool ;
export { Connect };

