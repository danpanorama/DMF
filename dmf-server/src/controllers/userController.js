import asyncHandler from '../middlewares/asyncHandler.js';
import User from '../models/Contact.js';

export const getMe = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id).select('-password');
  res.json({ status: 'success', data: user });
});
