import jwt from 'jsonwebtoken';
import { JWT_SECRET, PASS, UNAME } from "../config/config";
import { transporter } from "../config/ses";
import { VERIFIED_EMAIL } from "../config/config";
import { template } from '../utils/emailTemplate';

const verifyPass = ({ uname, pass }: { uname: string, pass: string }) => {
  if (uname === UNAME && pass === PASS) {
    const token = jwt.sign(uname, JWT_SECRET);
    return token;
  }

  return null;
}

const sendMail = async ({ mails, mail_body, mail_content }: { mails: Array<string>, mail_content: string, mail_body: string }) => {
  const htmlToSend = template({
    mail_content
  });
  try {
    for (let i = 0; i < mails.length; i += 40 ) {
      const slicedMails = mails.slice(i, i+40)
      await transporter.sendMail({
        from: VERIFIED_EMAIL,
        to: VERIFIED_EMAIL,
        bcc: slicedMails,
        subject: mail_body,
        html: htmlToSend 
      })
    }
    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
}

export {
  verifyPass,
  sendMail
} 
