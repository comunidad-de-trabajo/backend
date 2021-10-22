const nodeMailer = require('nodemailer');
import config from '../config/config';

exports.sendEmail = (emailData) => {
  const { nodemailer } = config;
  const transporter = nodeMailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    requireTLS: true,
    auth: {
      user: nodemailer.NODEMAILER_USER,
      pass: nodemailer.NODEMAILER_PASSWORD,
    },
  });
  return transporter
    .sendMail(emailData)
    .then((info) => console.log(`Message sent: ${info.response}`))
    .catch((err) => console.log(`Problem sending email: ${err}`));
};
