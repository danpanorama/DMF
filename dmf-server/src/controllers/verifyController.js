import { sendMail } from "../utils/email.js";
import twilio from "twilio";

const twilioClient = twilio(process.env.TWILIO_SID, process.env.TWILIO_TOKEN);

export const sendVerificationCode = async (req, res) => {
  try {
    const { contact } = req.body;
    const code = Math.floor(100000 + Math.random() * 900000).toString();

    if (contact.includes("@")) {
      await sendMail({
        to: contact,
        subject: "Your verification code",
        html: `<h2>Your code: ${code}</h2>`,
      });
    } else if (contact.startsWith("+")) {
      await twilioClient.messages.create({
        body: `Your verification code is ${code}`,
        from: process.env.TWILIO_PHONE,
        to: contact,
      });
    }

    res.json({ success: true, code });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: err.message });
  }
};
