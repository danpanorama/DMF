import asyncHandler from '../middlewares/asyncHandler.js';
import User from '../models/User.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import logger from '../utils/logger.js';

const signToken = (userId) => jwt.sign({ id: userId }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN || '7d' });

export const register = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  const existing = await User.findOne({ email });
  if (existing) return res.status(400).json({ status: 'fail', message: 'Email already in use' });

  const salt = await bcrypt.genSalt(10);
  const hashed = await bcrypt.hash(password, salt);

  const user = await User.create({ name, email, password: hashed });
  const token = signToken(user._id);
  logger.info('New user registered', { userId: user._id, email: user.email });

  res.status(201).json({ status: 'success', data: { user: { id: user._id, name: user.name, email: user.email }, token } });
});

export const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) return res.status(400).json({ status: 'fail', message: 'Invalid credentials' });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(400).json({ status: 'fail', message: 'Invalid credentials' });

  const token = signToken(user._id);
  logger.info('User logged in', { userId: user._id });
  res.json({ status: 'success', data: { user: { id: user._id, name: user.name, email: user.email }, token } });
});
