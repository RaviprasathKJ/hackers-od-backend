require('dotenv').config();

const DB_USER : string = process.env.DB_USER!
const DB_PASS : string = process.env.DB_PASS!
const DB_HOST : string  = process.env.DB_HOST!
const DB_PORT : number = parseInt(process.env.DB_PORT!)
const DB_NAME : string  = process.env.DB_NAME!
const PORT: number = parseInt(process.env.PORT!)

export {
  DB_USER,
  DB_PASS,
  DB_HOST,
  DB_PORT,
  DB_NAME,
  PORT
}
