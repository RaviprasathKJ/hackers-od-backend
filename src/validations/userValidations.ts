import Joi from "joi";

const loginBody = Joi.object({
  uname: Joi.string().min(3).max(10).required(),
  pass: Joi.string().min(3).max(10).required(),
})

const mailBody = Joi.object({
  mail_body: Joi.string().min(3).max(10).required(),
  mail_content: Joi.string().min(3).max(10).required(),
  mails: Joi.array().items(Joi.string().email()).required(),
})

export {
  loginBody,
  mailBody 
}
