// import Review from "../models/Review.js";

// הוספת ביקורת

// export const addReview = async (req, res) => {
//   try {
//     const { productId, user, rating, comment } = req.body;
//     if (!productId || !user || !rating || !comment) {
//       return res.status(400).json({ message: "All fields are required" });
//     }

//     const review = await Review.create({ productId, user, rating, comment });
//     res.status(201).json({ message: "Review added successfully", review });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };



import asyncHandler from "../middlewares/asyncHandler.js";
import Review from "../models/Review.js";
import { findOrCreateContact } from "../utils/userUtils.js";

export const addReview = asyncHandler(async (req, res) => {
  const { productId, name, email, phone, rating, comment } = req.body;
console.log(req.body)
  if (!productId || !email || !rating || !comment ||!name) {
    return res.status(400).json({ message: "All fields are required" });
  }

  // שמירה/עדכון הלקוח
  const contact = await findOrCreateContact({ name, email, phone, message: comment });

  // בדיקה אם כבר קיימת ביקורת מאותו אימייל למוצר הזה
  let review = await Review.findOne({ productId, user: email });
  if (review) {
    review.rating = rating;
    review.comment = comment;
    await review.save();
    return res.status(200).json({ message: "Review updated successfully", review });
  }

  review = await Review.create({ productId, user: email, rating, comment });
  res.status(201).json({ message: "Review added successfully", review });
});


// שליפת כל הביקורות למוצר מסוים
export const getReviews = async (req, res) => {
  try {
    const { productId } = req.params;
    const reviews = await Review.find({ productId }).sort({ createdAt: -1 });
    res.json(reviews);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
