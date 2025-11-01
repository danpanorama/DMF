
// import mongoose from "mongoose";

// const meetingSchema = new mongoose.Schema({
//   user: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, // אופציונלי
//   contact: { type: mongoose.Schema.Types.ObjectId, ref: "Contact" }, // אופציונלי
//   productId: { type: String }, // אם זה נכס ספציפי
//   date: { type: Date, required: true },
//   time: { type: String, required: true },
//   status: { type: String, enum: ["pending", "confirmed", "cancelled"], default: "pending" },
//   createdAt: { type: Date, default: Date.now }
// });

// export default mongoose.model("Meeting", meetingSchema);


import mongoose from "mongoose";

const meetingSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  contact: { type: mongoose.Schema.Types.ObjectId, ref: "Contact" },
  email: { type: String, required: true },
  productId: { type: String },
  date: { type: Date, required: true },
  time: { type: String, required: true },
  status: { type: String, enum: ["pending", "confirmed", "cancelled"], default: "pending" },
  companyStatus: { type: String, enum: ["pending", "approved", "rejected"], default: "pending" }, // ✅ חדש
  approvalToken: { type: String, unique: true }, // לינק ייחודי לאישור
  createdAt: { type: Date, default: Date.now }
});


export default mongoose.model("Meeting", meetingSchema);
