const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS
  }
});

transporter.verify((err, suc) => {
  if (err) { console.warn('Error with email transport:\n', err )}
  else { console.info('Email service ready to send messages') } 
});

module.exports = { transporter };