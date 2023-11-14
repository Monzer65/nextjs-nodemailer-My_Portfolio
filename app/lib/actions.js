/** @format */

"use server";
import nodemailer from "nodemailer";

export async function sendEmail(formData) {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");
  const name = formData.get("name");

  let formErrors = {};

  try {
    if (!name) {
      formErrors.name = "Name is required.";
    } else if (name && name.length > 50) {
      formErrors.name = "Name must be less than 50 characters.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!senderEmail) {
      formErrors.senderEmail = "Email is required.";
    } else if (senderEmail && !emailRegex.test(senderEmail)) {
      formErrors.senderEmail = "Invalid email format.";
    } else if (
      senderEmail &&
      emailRegex.test(senderEmail) &&
      senderEmail.length > 50
    ) {
      formErrors.senderEmail = "Email must be less than 50 characters.";
    }

    if (!message) {
      formErrors.message = "Message is required.";
    } else if (message && message.length > 1000) {
      formErrors.message = "Message must be less than 1000 characters.";
    }

    if (Object.keys(formErrors).length > 0) {
      throw new Error(JSON.stringify(formErrors));
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.zoho.com",
      port: 465,
      auth: {
        user: process.env.EMAIL_ADDRESS,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const info = await transporter.sendMail({
      from: `"My Portfolio 👻" <exclusiveautoparts.shop@zohomail.com>`,
      to: "danesh.monzer@gmail.com, monzer-danesh@hotmail.com",
      subject: "New Contact",
      text: message,
      html: `<h2>name: ${name}</h2>
      <h2>email: ${senderEmail}</h2>
      <b>${message}</b>`,
    });

    console.log("Message sent: %s", info.messageId);

    return { success: true };
  } catch (error) {
    if (error.response) {
      return {
        error: { submit: "Something went wrong!" },
      };
    }
    return {
      error: JSON.parse(error.message),
    };
  }
}
