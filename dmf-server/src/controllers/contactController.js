// import asyncHandler from "../middlewares/asyncHandler.js";
// import { contactSchema } from "../validators/contactValidation.js";
// import { sendMail } from "../utils/email.js";

// export const sendContactMessage = asyncHandler(async (req, res) => {
//   const { error, value } = contactSchema.validate(req.body);
//   if (error) {
//     return res.status(400).json({ message: error.details[0].message });
//   }
//   console.log('here')

//   const { name, email, message, phone } = value;

//   await sendMail({
//     to: process.env.CONTACT_RECEIVER,
//     subject: `New contact from ${name}`,
//     text: `
//       Name: ${name}
//       Email: ${email}
//       Phone: ${phone || "N/A"}
//       Message:
//       ${message}
//     `,
//     html: `
//       <h3>New Contact Message</h3>
//       <p><b>Name:</b> ${name}</p>
//       <p><b>Email:</b> ${email}</p>
//       <p><b>Phone:</b> ${phone || "N/A"}</p>
//       <p><b>Message:</b><br>${message}</p>
//     `,
//   });

//   res.status(200).json({ message: "Message sent successfully!" });
// });

import asyncHandler from "../middlewares/asyncHandler.js";
import { contactSchema } from "../validators/contactValidation.js";
import { sendMail } from "../utils/email.js";
import { findOrCreateContact } from "../utils/userUtils.js";

export const sendContactMessage = asyncHandler(async (req, res) => {
  const { error, value } = contactSchema.validate(req.body);

  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }

  console.log('here');

  const { name, email, message, phone } = value;

  // שמירה/עדכון הלקוח
  await findOrCreateContact({ name, email, phone, message });


  await sendMail({
    to: process.env.CONTACT_RECEIVER || "your@email.com", // מקבל ההודעות
    subject: `New contact from ${name}`,
    text: `
      Name: ${name}
      Email: ${email}
      Phone: ${phone || "N/A"}
      Message:
      ${message}
    `,
    html: `
      <h3>New Contact Message</h3>
      <p><b>Name:</b> ${name}</p>
      <p><b>Email:</b> ${email}</p>
      <p><b>Phone:</b> ${phone || "N/A"}</p>
      <p><b>Message:</b><br>${message}</p>
    `,
  });

  res.status(200).json({ message: "Message sent successfully!" });
});
