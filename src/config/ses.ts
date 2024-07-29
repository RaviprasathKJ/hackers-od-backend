import * as AWS from "@aws-sdk/client-ses";
import nodemailer from "nodemailer";
import { ACCESS_KEY, REGION, SECRET_ACCESS_KEY } from "./config";

const ses = new AWS.SES({
  apiVersion: '2010-12-01',
  region: REGION,
  credentials: {
    accessKeyId: ACCESS_KEY,
    secretAccessKey: SECRET_ACCESS_KEY,
  },
});

export const transporter = nodemailer.createTransport({
  SES: { ses, aws: AWS },
});


export default {
  transporter
};
