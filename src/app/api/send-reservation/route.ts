import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, date, guests, message } = body;

    // This is a dummy transporter for development purposes
    // In production, use a real SMTP service
    const transporter = nodemailer.createTransport({
      host: 'smtp.example.com',  // Replace with a real SMTP host
      port: 587,
      secure: false,
      auth: {
        user: 'user@example.com',  // Replace with a real email
        pass: 'password',          // Replace with a real password
      },
    });

    // Create email content
    const emailContent = `
      New reservation request:
      
      Name: ${name}
      Email: ${email}
      Date and Time: ${date}
      Number of Guests: ${guests}
      Message: ${message || 'No message provided'}
    `;

    // For development, we'll just log the email content instead of sending it
    console.log(emailContent);

    // Uncomment the following to actually send emails in production
    /*
    await transporter.sendMail({
      from: 'rezervari@draculabites.ro',
      to: 'your-email@example.com',
      subject: `New Reservation from ${name}`,
      text: emailContent,
    });
    */

    return NextResponse.json({ success: true });
    
  } catch (error) {
    console.error('Error in send-reservation API:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to send reservation' },
      { status: 500 }
    );
  }
} 