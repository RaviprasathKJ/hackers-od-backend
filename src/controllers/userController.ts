import { Request, Response } from "express";
import { errors, sucess } from "../status";
import { loginBody, mailBody } from "../validations";
import { verifyPass, sendMail } from "../service/userService";

const loginUser = async (req: Request, res: Response) => {
  const { value } = loginBody.validate(req.body)
  const token = verifyPass(value)
  if (token) {
    return res.status(sucess.code).send({
      mess: sucess.mess,
      token
    });
  }
  return res.status(errors.login.code).send(errors.login.mess);
}

const sesService = async (req: Request, res: Response) => {
  const { value } = mailBody.validate(req.body)
  const sent = await sendMail(value);
  if (sent) {
    return res.status(sucess.code).send(sucess.mess);
  } else {
    return res.status(errors.email.code).send(errors.email.mess);
  }
}

export {
  loginUser,
  sesService
}
