import logger from '../utils/logger.js';

export default (err, req, res, next) => {
  logger.error(err.message || 'Server Error', { stack: err.stack, path: req.path });
  const status = err.statusCode || 500;
  const message = process.env.NODE_ENV === 'production' ? 'Internal Server Error' : (err.message || 'Internal Server Error');
  res.status(status).json({ status: 'error', message });
};
