import Review from "../models/Review.js";

// הוספת ביקורת
export const addReview = async (req, res) => {
  try {
    const { productId, user, rating, comment } = req.body;
    if (!productId || !user || !rating || !comment) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const review = await Review.create({ productId, user, rating, comment });
    res.status(201).json({ message: "Review added successfully", review });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

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
