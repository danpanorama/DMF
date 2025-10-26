// import express from "express";
// import { addReview, getReviews } from "../controllers/reviewController.js";

// const router = express.Router();

// router.post("/", addReview);
// router.get("/:productId", getReviews);


// export default router;


import express from "express";
import { addReview, getReviews, deleteReview } from "../controllers/reviewController.js";

const router = express.Router();

// הוספת תגובה
router.post("/", addReview);

// שליפת תגובות לפי productId
router.get("/:productId", getReviews);

// מחיקת תגובה לפי ID (רק אם אותו deviceId)
router.delete("/:id", deleteReview);

export default router;
