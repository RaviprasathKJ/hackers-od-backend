import { NextFunction, Request, Response } from "express";
import jwt from 'jsonwebtoken';
//import { jwtDecode } from "jwt-decode";
import { JWT_SECRET } from "../config/config";
import { errors } from "../status";

const AuthenticateUser = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]
  if (token) {
    jwt.verify(token, JWT_SECRET, (err, user) => {
      if (!err) {
        req.body = { ...req.body, user }
        return next();
      } else {
        return res.status(errors.unauth.code).send(errors.unauth.mess)
      }
    })
  }else{
     return res.status(errors.unauth.code).send(errors.unauth.mess)
  }
}

//const verfiyToken = (token: string) => {
 // return jwt.verify(token, JWT_SECRET) 
//}


export {
  AuthenticateUser
}
