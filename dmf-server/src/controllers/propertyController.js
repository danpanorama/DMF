import Property from '../models/propertyModel.js';
import asyncHandler from '../middlewares/asyncHandler.js';
import Review from "../models/Review.js";
// 📦 Get all properties
export const getAllProperties = asyncHandler(async (req, res) => {
  const properties = await Property.find();
  res.status(200).json({ status: 'success', results: properties.length, data: properties });
});

// 🏠 Get single property by ID
export const getPropertyById = asyncHandler(async (req, res) => {
  const property = await Property.findById(req.params.id);
  if (!property) {
    return res.status(404).json({ status: 'fail', message: 'Property not found' });
  }

    const reviews = await Review.find({ productId: req.params.id }).sort({ createdAt: -1 });


  res.status(200).json({ status: 'success', data: property,reviews:reviews });
});

// ✍️ Create new property (admin only)
export const createProperty = asyncHandler(async (req, res) => {
  const newProperty = await Property.create(req.body);
  res.status(201).json({ status: 'success', data: newProperty });
});
