import nodemailer from 'nodemailer';
require('dotenv').config();

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export const sendEmail = ({ to, from, subject, message }) => {
  const mailOptions = {
    to,
    from,
    subject,
    text: message,
  };
  return transporter.sendMail(mailOptions);
};
