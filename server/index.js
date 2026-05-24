import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { body, validationResult } from 'express-validator';
import nodemailer from 'nodemailer';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors({ origin: process.env.CLIENT_URL || '*' }));
app.use(express.json());

app.post(
  '/api/contact',
  [
    body('name').trim().notEmpty(),
    body('email').isEmail(),
    body('subject').trim().notEmpty(),
    body('message').trim().notEmpty()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ message: 'Please complete all required fields.' });
    }

    if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS || !process.env.CONTACT_RECIPIENT) {
      return res.status(500).json({ message: 'Email service is not configured. Check server environment variables.' });
    }

    const { name, email, subject, message } = req.body;

    try {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT || 465),
        secure: true,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS
        }
      });

      await transporter.sendMail({
        from: `Portfolio Contact <${process.env.SMTP_USER}>`,
        to: process.env.CONTACT_RECIPIENT,
        subject: `Portfolio Message: ${subject}`,
        html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong></p><p>${message}</p>`
      });

      res.status(200).json({ message: 'Message sent successfully.' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Failed to send email. Please try again later.' });
    }
  }
);

app.listen(PORT, () => {
  console.log(`Portfolio API running on http://localhost:${PORT}`);
});
