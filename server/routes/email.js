const { Router } = require('express');
const nodemailer = require('nodemailer');
const { transporter } = require('../controllers/emailController');

const emailRoute = Router();

emailRoute.post('/send', async (req, res) => {
  const {name, email, message } = req.body;
  const content = `Name: ${name}\nEmail: ${email}\n Message: ${message}`;

  const mail = {
    from: name,
    to: process.env.TO_EMAIL,
    subject: 'New Message from ProgrammingBooth.com',
    text: content,
  }

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      console.warn('Error sending mail to server\n', err);
      res.json({ status: 'fail' });
    } else {
      console.info('Successfully sent new email\n', mail);
      res.json({ status: 'success' })
    }
  })
})

module.exports = { emailRoute }