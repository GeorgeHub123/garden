import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const data = await req.json();
    
    // Create a transporter using SMTP
    // You'll need to use your own email credentials
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com', // Use your email provider's SMTP server
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER || 'your-email@gmail.com', // Your email
        pass: process.env.EMAIL_PASSWORD || 'your-app-password', // Your app password (for Gmail)
      },
    });
    
    // Format the datetime from the form
    const reservationDate = new Date(data.date);
    const formattedDate = reservationDate.toLocaleString('ro-RO', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
    
    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER || 'your-email@gmail.com',
      to: process.env.DESTINATION_EMAIL || 'restaurant@dracula-bits.com', // Restaurant email
      subject: `Nouă Rezervare - ${data.name}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px; margin: 0 auto; border: 1px solid #ddd; border-radius: 5px;">
          <h1 style="color: #8B0000; border-bottom: 1px solid #eee; padding-bottom: 10px;">Nouă Rezervare la Dracula's Bite and Bits</h1>
          
          <div style="margin: 20px 0;">
            <p style="font-size: 16px;"><strong>Nume:</strong> ${data.name}</p>
            <p style="font-size: 16px;"><strong>Email:</strong> ${data.email}</p>
            <p style="font-size: 16px;"><strong>Data și Ora:</strong> ${formattedDate}</p>
            <p style="font-size: 16px;"><strong>Număr de Persoane:</strong> ${data.guests}</p>
            <p style="font-size: 16px;"><strong>Mesaj:</strong> ${data.message || 'Fără mesaj'}</p>
          </div>
          
          <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin-top: 20px;">
            <p style="margin: 0; color: #555;">Această rezervare a fost trimisă prin formularul de pe site-ul Dracula's Bite and Bits.</p>
          </div>
        </div>
      `,
    };
    
    // Send email
    await transporter.sendMail(mailOptions);
    
    // Return success response
    return NextResponse.json({ 
      success: true,
      message: 'Rezervarea a fost trimisă cu succes!' 
    });
    
  } catch (error) {
    console.error('Error sending email:', error);
    
    return NextResponse.json(
      { 
        success: false, 
        message: 'A apărut o eroare la trimiterea rezervării. Vă rugăm încercați din nou.' 
      },
      { status: 500 }
    );
  }
} 