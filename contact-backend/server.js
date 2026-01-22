// server.js
const express = require('express');
const { Resend } = require('resend');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;
const resend = new Resend(process.env.RESEND_API_KEY);

// Middleware
app.use(cors({
  origin: ['https://plum-pigeon-480623.hostingersite.com', 'http://localhost:8080', 'http://localhost:5173'],
  credentials: true
}));
app.use(express.json());

console.log('Server starting... Using Resend for email delivery');
console.log('RESEND_API_KEY loaded:', !!process.env.RESEND_API_KEY);

// POST endpoint to handle contact form submissions
app.post('/send', async (req, res) => {
  console.log('Received request:', req.body);
  const { name, email, message } = req.body;

  // Basic validation
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    console.log('Attempting to send email to: asf@ozzydesignagency.com');
    
    const data = await resend.emails.send({
      from: 'noreply@ozzydesignagency.com',
      to: 'asf@ozzydesignagency.com',
      replyTo: email,
      subject: `New message from ${name}`,
      html: `
        <h2>New Inquiry Received</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <pre>${message}</pre>
      `,
    });

    console.log('Email sent successfully:', data.id);
    res.status(200).json({ success: true, message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error.message);
    res.status(500).json({ success: false, message: `Failed to send email: ${error.message}` });
  }
});

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
