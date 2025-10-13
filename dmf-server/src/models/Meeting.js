// import mongoose from 'mongoose';

// const meetingSchema = new mongoose.Schema({
//   user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
//   subject: { type: String, required: true, trim: true },
//   date: { type: Date, required: true },
//   location: { type: String }, // optional
//   status: { type: String, enum: ['pending','confirmed','cancelled'], default: 'pending' },
//   createdAt: { type: Date, default: Date.now }
// });

// meetingSchema.index({ user: 1, date: 1 });

// export default mongoose.model('Meeting', meetingSchema);



// models/Meeting.js
import mongoose from "mongoose";

const meetingSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, // אופציונלי
  contact: { type: mongoose.Schema.Types.ObjectId, ref: "Contact" }, // אופציונלי
  productId: { type: String }, // אם זה נכס ספציפי
  date: { type: Date, required: true },
  time: { type: String, required: true },
  status: { type: String, enum: ["pending", "confirmed", "cancelled"], default: "pending" },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Meeting", meetingSchema);
