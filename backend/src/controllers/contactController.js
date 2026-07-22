import ContactMessage from '../models/ContactMessage.js';
import { createTransporter } from '../services/mailService.js';

export async function createContactMessage(req, res, next) {
  try {
    const message = await ContactMessage.create(req.body);

    if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
      const transporter = createTransporter();
      const emailBody = `Name: ${message.name}\nEmail: ${message.email}\nPhone: ${message.phone || 'N/A'}\nService: ${message.service || 'General Inquiry'}\n\nMessage:\n${message.message}`;

      await transporter.sendMail({
        from: process.env.SMTP_USER,
        to: process.env.SMTP_USER,
        subject: 'New Contact Inquiry from Website',
        text: emailBody
      });
    }

    res.status(201).json({ success: true, data: message });
  } catch (error) {
    next(error);
  }
}
