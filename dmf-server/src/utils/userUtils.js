

// // utils/userUtils.js
// // controllers/userUtils.js
// import Contact from "../models/Contact.js";

// // פונקציה שמקבלת נתוני לקוח ושומרת או מעדכנת אותו
// export const findOrCreateContact = async ({ name, email, phone, deviceId }) => {
//   if (!email && !deviceId) return null;

//   // בדיקה אם יש משתמש עם אותו אימייל או אותו מכשיר
//   let contact = await Contact.findOne({ $or: [{ email }, { deviceId }] });

//   if (contact) {
//     // עדכון שדות אם יש מידע חדש
//     contact.name = name || contact.name;
//     contact.phone = phone || contact.phone;
//     contact.deviceId = deviceId || contact.deviceId;
//     await contact.save();
//   } else {
//     // יצירת משתמש חדש
//     contact = await Contact.create({ name, email, phone, deviceId });
//   }

//   return contact;
// };


// utils/userUtils.js
import Contact from "../models/Contact.js";
import { sendMail } from "../utils/email.js";

// פונקציה שמקבלת נתוני לקוח ושומרת או מעדכנת אותו
export const findOrCreateContact = async ({ name, email, phone, deviceId }) => {
  if (!email && !deviceId) return null;

  // בדיקה אם יש משתמש עם אותו אימייל או אותו מכשיר
  let contact = await Contact.findOne({ $or: [{ email }, { deviceId }] });

  if (contact) {
    // עדכון שדות אם יש מידע חדש
    contact.name = name || contact.name;
    contact.phone = phone || contact.phone;
    contact.deviceId = deviceId || contact.deviceId;
    await contact.save();
  } else {
    // יצירת משתמש חדש
    contact = await Contact.create({ name, email, phone, deviceId });

    // ✅ שולח מייל לחברה כשהמשתמש נוצר
    try {
      await sendMail({
        to: process.env.COMPANY_EMAIL,
        subject: "👤 New Contact Registered",
        html: `
          <h3>New contact has been created</h3>
          <p><strong>Name:</strong> ${name || "-"}<br/>
             <strong>Email:</strong> ${email || "-"}<br/>
             <strong>Phone:</strong> ${phone || "-"}<br/>
             <strong>Device ID:</strong> ${deviceId || "-"}</p>
        `
      });
    } catch (err) {
      console.error("Failed to send new contact email:", err);
    }

    // אופציונלי – מייל תודה ללקוח החדש
    if (email) {
      try {
        await sendMail({
          to: email,
          subject: "🎉 Welcome!",
          html: `
            <h3>Welcome ${name || "there"}!</h3>
            <p>Thanks for reaching out. We'll be in touch soon!</p>
          `
        });
      } catch (err) {
        console.error("Failed to send welcome email:", err);
      }
    }
  }

  return contact;
};
