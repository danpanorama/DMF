import jwt from 'jsonwebtoken';
import User from '../models/User.js';

export const protect = async (req, res, next) => {
  let token;
  const authHeader = req.headers.authorization;
  if (authHeader && authHeader.startsWith('Bearer ')) {
    token = authHeader.split(' ')[1];
  } else if (req.cookies && req.cookies.token) {
    token = req.cookies.token;
  }

  if (!token) {
    return res.status(401).json({ status: 'fail', message: 'Not authorized, token missing' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id).select('-password');
    if (!user) return res.status(401).json({ status: 'fail', message: 'User not found' });
    req.user = user;
    next();
  } catch (err) {
    return res.status(401).json({ status: 'fail', message: 'Not authorized, token invalid' });
  }
};

export const authorize = (...roles) => (req, res, next) => {
  if (!req.user) return res.status(401).json({ status: 'fail', message: 'Not authorized' });
  if (!roles.includes(req.user.role)) return res.status(403).json({ status: 'fail', message: 'Forbidden' });
  next();
};
