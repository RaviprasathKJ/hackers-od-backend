import jwt from 'jsonwebtoken';
import { JWT_SECRET, PASS, UNAME } from "../config/config";
import { transporter } from "../config/ses";
import { VERIFIED_EMAIL } from "../config/config";

const verifyPass = ( {uname, pass}: {uname: string, pass: string} ) => {
  if(uname === UNAME && pass === PASS){
    const token =  jwt.sign(uname, JWT_SECRET);
    return token;
  }
  return null;
}

const sendMail = async ( { mails, mail_content, mail_body } : { mails: Array<string>, mail_content: string, mail_body: string } ) => {
  await transporter.sendMail({
    from: "hackerzpromotion@gmail.com", 
    to: "hackerzpromotion@gmail.com",
    bcc: mails,
    subject: mail_body,
    text: mail_content
  })
  console.log("Mother Fuck")
}

export {
  verifyPass,
  sendMail 
} 
