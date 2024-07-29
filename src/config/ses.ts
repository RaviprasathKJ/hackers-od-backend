import aws from "aws-sdk";
import nodemailer from "nodemailer";
import { ACCESS_KEY, REGION, SECRET_ACCESS_KEY } from "./config";

aws.config.update({
  accessKeyId: ACCESS_KEY,
  secretAccessKey: SECRET_ACCESS_KEY,
  region: REGION
});

const transporter = nodemailer.createTransport({
  SES: new aws.SES({ apiVersion: '2010-12-01' })
});

export {
  transporter
};
