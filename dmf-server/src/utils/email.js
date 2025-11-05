import nodemailer from 'nodemailer';
import logger from './logger.js';


console.log('SMTP_HOST:', process.env.SMTP_HOST);
console.log('SMTP_PORT:', process.env.SMTP_PORT);
console.log('SMTP_USER:', process.env.SMTP_USER);
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT) || 587,
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
});

export const sendMail = async ({ to, subject, html, text }) => {
  const mailOptions = {
    from: process.env.EMAIL_FROM,
    to,
    subject,
    text,  
    html
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    logger.info('Email sent', { to, messageId: info.messageId });
    return info;
  } catch (err) {
    logger.error('Failed to send email', { err, to });
    throw err;
  }
};
