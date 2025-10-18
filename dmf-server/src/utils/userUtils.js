// controllers/userUtils.js
import Contact from "../models/Contact.js";

// פונקציה שמקבלת נתוני לקוח ושומרת או מעדכנת אותו
export const findOrCreateContact = async ({ name, email, phone, message }) => {
  if (!email) return null;

  let contact = await Contact.findOne({ email });
  if (contact) {
    // עדכון שדות אם יש מידע חדש
    contact.name = name || contact.name;
    contact.phone = phone || contact.phone;
    if (message) contact.message = message; // אופציונלי
    await contact.save();
  } else {
    contact = await Contact.create({ name, email, phone, message: message || "" });
  }
  return contact;
};
