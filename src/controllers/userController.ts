import { Request, Response } from "express";
import { errors, sucess } from "../status";
import { loginBody, mailBody } from "../validations";
import { verifyPass, sendMail } from "../service/userService";

const loginUser = async( req: Request, res: Response ) => {
  const { value } = loginBody.validate(req.body)
  const token = verifyPass(value)
  if(token){
    return res.status(sucess.code).send({
      mess: sucess.mess,
      token
    });
  }
  return res.status(errors.login.code).send(errors.login.mess);
}

const sesService = async( req: Request, res: Response ) => {
  const { value } = mailBody.validate(req.body)
  sendMail( value );
  return res.status(sucess.code).send(sucess.mess);
}

export {
  loginUser,
  sesService
}
