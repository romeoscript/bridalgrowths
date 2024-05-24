import nodemailer from "nodemailer";


const transporter = nodemailer.createTransport({
  host: "smtp.office365.com",
  secure: true,
  port: 465,
  auth: {
    user: process.env.EMAIL_HOST_USER,
    pass: process.env.EMAIL_HOST_PASSWORD,
  },
});

export const POST = async (req) => {
  try {
    const {
      projectDescription,
      budgetRange,
      companyName,
      companyWebsite,
      yourName,
    } = await req.json();

    // Send email
    const mailOptions = {
      from: "theofficialxendex@xendex.com.ng",
      to: "romeobourne211@gmail.com",
      subject: "New Project Discussion Request",
      html: `
        <h1>New Project Discussion Request</h1>
        <p><strong>Description:</strong> ${projectDescription}</p>
        <p><strong>Budget Range:</strong> ${budgetRange.join(', ')}</p>
        <p><strong>Company Name:</strong> ${companyName}</p>
        <p><strong>Company Website:</strong> ${companyWebsite}</p>
        <p><strong>Your Name:</strong> ${yourName}</p>
        <p>Thank you for reaching out!</p>
      `,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent: " + info.response);
    return new Response("Email sent successfully", { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response("Failed to send email", { status: 500 });
  }
};
