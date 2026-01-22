// server.js
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: ['https://plum-pigeon-480623.hostingersite.com', 'http://localhost:8080', 'http://localhost:5173'],
  credentials: true
}));
app.use(express.json());     // parse JSON requests

console.log('Server starting... Env vars loaded:');
console.log('SMTP_HOST:', process.env.SMTP_HOST);
console.log('SMTP_PORT:', process.env.SMTP_PORT);
console.log('EMAIL_USER:', process.env.EMAIL_USER);

// POST endpoint to handle contact form submissions
app.post('/send', async (req, res) => {
  console.log('Received request:', req.body);
  const { name, email, message } = req.body;

  // Basic validation
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  // Nodemailer transporter using Hostinger SMTP
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,            // ozzydesignagency.com
    port: parseInt(process.env.SMTP_PORT),  // 465
    secure: true,                            // true for 465
    auth: {
      user: process.env.EMAIL_USER,          // your email
      pass: process.env.EMAIL_PASS,          // your email password
    },
  });

  try {
    console.log('Attempting to send email from:', process.env.EMAIL_USER);
    
    await transporter.sendMail({
      from: process.env.EMAIL_USER,           // Use the authenticated email as sender
      to: process.env.EMAIL_USER,             // your inbox
      replyTo: email,                         // Set user's email as reply-to instead
      subject: `New message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    });

    console.log('Email sent successfully');
    res.status(200).json({ success: true, message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error.message);
    console.error('Error code:', error.code);
    res.status(500).json({ success: false, message: `Failed to send email: ${error.message}` });
  }
});

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
