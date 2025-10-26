// import mongoose from "mongoose";

// const reviewSchema = new mongoose.Schema({
//   productId: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "Property", // או שם אחר אם זה סוג אחר של מוצר
//     required: true,
//   },
//   user: {
//     type: String,
//     required: true,
//     trim: true,
//   },
//   rating: {
//     type: Number,
//     min: 1,
//     max: 5,
//     required: true,
//   },
//   comment: {
//     type: String,
//     required: true,
//     trim: true,
//   },
// }, { timestamps: true });

// export default mongoose.model("Review", reviewSchema);


import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema(
  {
    productId: { type: String, required: true },
    user: { type: String },
    comment: { type: String, required: true },
    rating: { type: Number, required: true },
    deviceId: { type: String, required: true }, // ✅ חדש
  },
  { timestamps: true }
);

export default mongoose.model("Review", reviewSchema);
