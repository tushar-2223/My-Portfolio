import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { firstName, lastName, email, subject, message } = await request.json();

    // Here you would typically send an email using a service like Nodemailer, SendGrid, or Resend.
    // For this example, we'll just log the data to the console.

    console.log('Contact form submission:');
    console.log('Name:', `${firstName} ${lastName}`);
    console.log('Email:', email);
    console.log('Subject:', subject);
    console.log('Message:', message);

    // Replace this with your actual email sending logic.
    // Example with Nodemailer (you would need to install it and configure it):
    /*
    const nodemailer = require('nodemailer');
    const transporter = nodemailer.createTransport({
      // your email provider config
    });
    await transporter.sendMail({
      from: email,
      to: 'your-email@example.com',
      subject: `New message from ${firstName} ${lastName}: ${subject}`,
      text: message,
    });
    */

    return NextResponse.json({ message: 'Message sent successfully!' }, { status: 200 });
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json({ error: 'Failed to send message.' }, { status: 500 });
  }
}
