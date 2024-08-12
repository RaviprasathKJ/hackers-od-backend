import * as aws from '@aws-sdk/client-ses'
import nodemailer from "nodemailer";
import { ACCESS_KEY, REGION, SECRET_ACCESS_KEY } from "./config";

const ses = new aws.SES({
  region: REGION,
  apiVersion: "2010-12-01",
  credentials: {
    accessKeyId: ACCESS_KEY,
    secretAccessKey: SECRET_ACCESS_KEY,
  },
});

const transporter = nodemailer.createTransport({
  SES: { ses, aws },
});

export { transporter };

