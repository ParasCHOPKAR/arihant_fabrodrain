import nodemailer from "nodemailer";

let firstConfirmationSent = false; // 👈 Track if first confirmation sent

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, phone, subject, message } = body;

    // ✅ Gmail Transporter Setup
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER, // your Gmail (fibrodrain@gmail.com)
        pass: process.env.GMAIL_PASS, // your App Password
      },
    });

    // ✅ Admin Mail (Always Sent)
    const adminMail = {
      from: `"${name}" <${email}>`,
      to: "fibrodrain@gmail.com",
      subject: subject || "New Inquiry from Fibrodrain Contact Form",
      html: `
        <div style="font-family: Arial, sans-serif; background:#f8f8f8; padding:20px;">
          <div style="max-width:600px; margin:auto; background:#fff; border-radius:10px; padding:25px; box-shadow:0 4px 12px rgba(0,0,0,0.1);">
            <h2 style="color:#F58220; text-align:center;">📩 New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Message:</strong></p>
            <p style="background:#f3f3f3; padding:15px; border-radius:8px;">${message}</p>
            <hr style="border:none; border-top:1px solid #eee; margin:20px 0;">
            <p style="text-align:center; color:#777;">This message was sent via the <strong>Fibrodrain Website Contact Form</strong>.</p>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(adminMail);

    // ✅ Send Confirmation Email Only Once
    if (!firstConfirmationSent) {
      const confirmationMail = {
        from: `"Fibrodrain" <fibrodrain@gmail.com>`,
        to: email,
        subject: "✅ We’ve received your message – Fibrodrain",
        html: `
          <div style="font-family: Arial, sans-serif; background:#f3f3f3; padding:25px;">
            <div style="max-width:600px; margin:auto; background:#ffffff; border-radius:12px; overflow:hidden; box-shadow:0 4px 12px rgba(0,0,0,0.1);">
              
              <!-- Header -->
              <div style="background:#F58220; color:white; padding:20px; text-align:center;">
                <h1 style="margin:0; font-size:24px;">Fibrodrain</h1>
                <p style="margin:5px 0 0;">Thank you for contacting us!</p>
              </div>

              <!-- Body -->
              <div style="padding:25px; color:#333;">
                <h2 style="color:#F58220; margin-top:0;">Hello ${name},</h2>
                <p>
                  We’ve received your inquiry and appreciate you reaching out to <strong>Fibrodrain</strong>.
                  Our support team will review your message and get back to you shortly.
                </p>
                <p>
                  <strong>Your Message:</strong>
                </p>
                <blockquote style="border-left:4px solid #F58220; padding-left:15px; color:#555;">
                  ${message}
                </blockquote>

                <p style="margin-top:20px;">Warm regards,<br>
                <strong>Team Fibrodrain</strong><br>
                📞 +91 9637819378<br>
                ✉️ fibrodrain@gmail.com
                </p>
              </div>

              <!-- Footer -->
              <div style="background:#f9f9f9; text-align:center; padding:15px; font-size:13px; color:#777;">
                <p>© ${new Date().getFullYear()} Fibrodrain | All rights reserved</p>
              </div>

            </div>
          </div>
        `,
      };

      await transporter.sendMail(confirmationMail);
      firstConfirmationSent = true;
    }

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      { status: 500 }
    );
  }
}
