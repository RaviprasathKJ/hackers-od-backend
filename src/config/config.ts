require('dotenv').config();

const UNAME: string = process.env.UNAME!
const PASS: string = process.env.PASS!
const JWT_SECRET: string = process.env.JWT_SECRET!
const PORT: number = parseInt(process.env.PORT!)
const REGION: string = process.env.REGION!;
const SECRET_ACCESS_KEY : string = process.env.SECRET_ACCESS_KEY !;
const ACCESS_KEY : string = process.env.ACCESS_KEY!;
const VERIFIED_EMAIL: string = process.env.VERIFIED_MAIL!;


export {
  UNAME,
  PASS,
  JWT_SECRET,
  PORT,
  REGION, 
  SECRET_ACCESS_KEY, 
  ACCESS_KEY,
  VERIFIED_EMAIL
}
