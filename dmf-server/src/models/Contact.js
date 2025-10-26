// models/Contact.js
import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true, maxlength: 100 },
  email: { type: String, required: true, unique: true, lowercase: true, trim: true },
  password: { type: String, required: false  },
  role: { type: String, default: 'user', enum: ['user', 'admin'] },
  deviceId: { type: String, unique: true, sparse: true }, // ✅ חדש: מזהה המכשיר
  createdAt: { type: Date, default: Date.now }
}, { timestamps: true });

export default mongoose.model("Contact", contactSchema);


// import mongoose from 'mongoose';

// const userSchema = new mongoose.Schema({
//   name: { type: String, required: true, trim: true, maxlength: 100 },
//   email: { type: String, required: true, unique: true, lowercase: true, trim: true },
//   password: { type: String, required: true },
//   role: { type: String, default: 'user', enum: ['user', 'admin'] },
//   deviceId: { type: String, unique: true, sparse: true }, // ✅ חדש: מזהה המכשיר
//   createdAt: { type: Date, default: Date.now }
// });

// export default mongoose.model('User', userSchema);
