// src/functions/sendEmail.js
const nodemailer = require("nodemailer");

exports.handler = async (event, context) => {
  if (event.httpMethod !== "POST") {
    console.log("hi",event.body);

    return { statusCode: 405, body: "Method Not Allowed" };
  }
  console.log(event.body);
  const {
    name,
    dobDay,
    dobMonth,
    dobYear,
    gender,
    enrollmentNo,
    passoutYear,
    presentDesignation,
    presentOrganization,
    industry,
    emailAddress,
    phoneNo,
    correspondenceAddress,
    permanentAddress,
    message,
  } = JSON.parse(event.body);
console.log(JSON.parse(event.body));
  // Configure your email transport
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: false,
    auth: {
      user: "emailgoes@here.com",
      pass: "passwordbruh$$69",
    },
  });

  // Set up email options
  const mailOptions = {
    from: "emailgoes@here.com",
    to: "emailgoes@here.com",
    subject: "New Contact Form Submission",
    text: `
Name: ${name}
Date of Birth: ${dobDay}-${dobMonth}-${dobYear}
Gender: ${gender}
Enrollment No: ${enrollmentNo}
Passout Year: ${passoutYear}
Present Designation: ${presentDesignation}
Present Organization: ${presentOrganization}
Industry: ${industry}
Email Address: ${emailAddress}
Phone No: ${phoneNo}
Address (Correspondence): ${correspondenceAddress}
Address (Permanent): ${permanentAddress}
Message (Optional): ${message}
    `,
  };

  // Send the email
  try {
    await transporter.sendMail(mailOptions);
    return { statusCode: 200, body: "Message sent successfully" };
  } catch (error) {
    console.error(error);
    return { statusCode: 500, body: "Error sending message" };
  }
};
